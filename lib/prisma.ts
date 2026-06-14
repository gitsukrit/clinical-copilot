import { PrismaClient } from '../prisma/generated/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export function getTenantPrisma(tenantId: string) {
  return prisma.$extends({
    query: {
      $allModels: {
        async $allOperations({ args, query }) {
          await prisma.$executeRawUnsafe(
            "SELECT set_config('app.current_tenant', $1, TRUE)",
            tenantId
          );
          return query(args);
        },
      },
    },
  });
}