/*
  Warnings:

  - You are about to drop the column `github` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `Project` table. All the data in the column will be lost.
  - Added the required column `status` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userUserId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "status" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "github",
DROP COLUMN "twitter",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userUserId" INTEGER NOT NULL,
ALTER COLUMN "slug" DROP DEFAULT;

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "emailID" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "profileUrl" TEXT NOT NULL,
    "lastLoginAt" TIMESTAMP(3) NOT NULL,
    "role" "Roles" NOT NULL,
    "socialId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Socials" (
    "socialId" SERIAL NOT NULL,
    "twitter" TEXT,
    "github" TEXT,
    "linkedin" TEXT,

    CONSTRAINT "Socials_pkey" PRIMARY KEY ("socialId")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "Socials"("socialId") ON DELETE RESTRICT ON UPDATE CASCADE;
