/*
  Warnings:

  - The primary key for the `Education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `course` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `entity` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Education` table. All the data in the column will be lost.
  - Added the required column `field` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FREELANCER', 'VOLUNTEER', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "WorkLocation" AS ENUM ('REMOTE', 'ONSITE', 'HYBRID');

-- AlterTable
ALTER TABLE "Education" DROP CONSTRAINT "Education_pkey",
DROP COLUMN "course",
DROP COLUMN "entity",
DROP COLUMN "location",
DROP COLUMN "type",
ADD COLUMN     "field" TEXT NOT NULL,
ADD COLUMN     "school" TEXT NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Education_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Education_id_seq";

-- CreateTable
CREATE TABLE "SocialNetwork" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isCurrent" BOOLEAN NOT NULL DEFAULT false,
    "link" TEXT,
    "employmentType" "EmploymentType" NOT NULL,
    "workLocation" "WorkLocation" NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" TEXT,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);
