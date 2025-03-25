import { replyCommentCreate } from '@/handlers/requests/database/reply/comment';
import { replyReplyCreate } from '@/handlers/requests/database/reply/reply';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Variant } from '@/enums/notification';
import { showNotification } from '@/utilities/notifications';
import { capitalizeWords } from '@/utilities/formatters/string';
import { email } from '@/utilities/validators/email';
import { hasLength, useForm } from '@mantine/form';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { updateComments } from '@/libraries/redux/slices/comments';

export const useFormBlogReply = (params: {
  commentId?: string;
  replyId?: string;
  close?: () => void;
}) => {
  const [submitted, setSubmitted] = useState(false);
  const networkStatus = useNetwork();
  const session = useAppSelector((state) => state.session.value);
  const comments = useAppSelector((state) => state.comments.value);
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      name: session?.user_metadata.name || '',
      email: session?.email || '',
      content: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 24 }, 'Between 2 and 24 characters'),
      email: (value) => email(value.trim()),
      content: hasLength(
        { min: 3, max: 2048 },
        'Between 3 and 2048 characters'
      ),
    },
  });

  const parseValues = () => {
    return {
      name: capitalizeWords(form.values.name.trim()),
      // email: form.values.email.trim().toLowerCase(),
      content: form.values.content.trim(),
    };
  };

  const handleSubmit = async () => {
    if (form.isValid()) {
      try {
        if (!networkStatus.online) {
          showNotification({
            variant: Variant.WARNING,
            title: 'Network Error',
            desc: 'Please check your internet connection.',
          });
          return;
        }

        setSubmitted(true);

        let response;

        const content = {
          ...parseValues(),
          profileId: session?.id || undefined,
        };

        if (params.commentId) {
          response = await replyCommentCreate({
            ...content,
            commentId: params.commentId,
          });
        }

        if (params.replyId) {
          response = await replyReplyCreate({
            ...content,
            replyId: params.replyId,
          });
        }

        if (!response) {
          throw new Error('No response from server');
        }

        const result = await response.json();

        form.reset();

        if (response.ok) {
          if (params.commentId) {
            dispatch(
              updateComments(
                comments.map((comment) => {
                  if (comment.id == params.commentId) {
                    return {
                      ...comment,

                      replies: !comment.replies
                        ? [result.reply]
                        : [result.reply, ...comment.replies],
                    };
                  }

                  return comment;
                })
              )
            );
          }

          if (params.replyId) {
            dispatch(
              updateComments(
                comments.map((comment) => {
                  return {
                    ...comment,

                    replies: comment.replies?.map((reply) => {
                      if (reply.id == params.replyId) {
                        return {
                          ...reply,

                          replies: !reply.replies
                            ? [result.reply]
                            : [result.reply, ...reply.replies],
                        };
                      }

                      return reply;
                    }),
                  };
                })
              )
            );
          }

          if (params.close) {
            params.close();
          }

          return;
        }

        showNotification({ variant: Variant.FAILED }, response, result);
        return;
      } catch (error) {
        showNotification({
          variant: Variant.FAILED,
          desc: (error as Error).message,
        });
        return;
      } finally {
        setSubmitted(false);
      }
    }
  };

  return {
    form,
    submitted,
    handleSubmit,
    session,
  };
};
