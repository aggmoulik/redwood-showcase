/*
  Warnings:

  - You are about to drop the column `email` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `last_login_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `social_id` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_social_id_fkey";

-- AlterTable
ALTER TABLE "image" ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "project" DROP COLUMN "email",
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "website" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "slug" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "last_login_at",
DROP COLUMN "role",
DROP COLUMN "social_id";
