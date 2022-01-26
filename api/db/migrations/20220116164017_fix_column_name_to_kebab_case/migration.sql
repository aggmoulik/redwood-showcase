/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Socials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "roles" AS ENUM ('Admin', 'User');

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userUserId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_socialId_fkey";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Socials";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Roles";

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "github_url" TEXT,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "project_id" INTEGER,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "email_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "last_login_at" TIMESTAMP(3) NOT NULL,
    "role" "roles" NOT NULL,
    "social_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "socials" (
    "social_id" SERIAL NOT NULL,
    "twitter" TEXT,
    "github" TEXT,
    "linkedin" TEXT,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("social_id")
);

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_social_id_fkey" FOREIGN KEY ("social_id") REFERENCES "socials"("social_id") ON DELETE RESTRICT ON UPDATE CASCADE;
