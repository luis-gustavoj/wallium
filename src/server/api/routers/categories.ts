import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const categoriesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({ name: z.string(), description: z.string(), icon: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return ctx.prisma.category.create({
          data: {
            name: input.name,
            description: input.description,
            icon: input.icon,
            userId: ctx.session.user.id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      try {
        return ctx.prisma.category.delete({
          where: {
            id: input,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return ctx.prisma.category.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
