-- DropIndex
DROP INDEX "Project.email_unique";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT E'slug-test',
ADD COLUMN     "tags" TEXT[];
