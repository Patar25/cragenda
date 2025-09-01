// lib/prisma.ts
// Sets up a PrismaClient instance and caches it on the global object
// to prevent exhausting database connections during development. This
// pattern follows the recommended Next.js practice for using Prisma in
// serverless environments.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;