import prisma from '@/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const postRecord = await prisma.post.findUnique({
      where: { id: params.postId },

      include: {
        comments: {
          include: {
            _count: { select: { replies: true } },

            profile: true,
          },

          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!postRecord) {
      return NextResponse.json(
        { error: "Post doesn't exist" },
        { status: 404, statusText: 'Not Found' }
      );
    }

    return NextResponse.json(
      { comments: postRecord.comments },
      { status: 200, statusText: 'Comments Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get post comments):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
