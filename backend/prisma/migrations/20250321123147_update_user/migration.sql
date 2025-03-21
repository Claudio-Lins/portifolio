-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "maritalStatus" "MaritalStatus";
