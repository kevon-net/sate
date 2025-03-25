import { Category, Prisma } from '@prisma/client';

// Type for creating a category (without id and relations)
export type CategoryCreate = Prisma.CategoryCreateInput;

// Type for updating a category (all fields optional except id)
export type CategoryUpdate = Prisma.CategoryUpdateInput;

// Type for default category (with id and no relations)
export type CategoryGet = Category;

// Type for fetched category with relations
export type CategoryRelations = Prisma.CategoryGetPayload<{
  include: {
    _count: { select: { posts: true } };

    posts: {
      include: {
        _count: { select: { comments: true } };

        category: true;
        tags: true;
        profile: true;
        comments: {
          include: {
            _count: { select: { replies: true } };

            profile: true;
            replies: {
              include: {
                profile: true;
              };
            };
          };
        };
      };
    };
  };
}>;
