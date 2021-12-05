-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "github_url" TEXT,
    "description" TEXT NOT NULL,
    "twitter" TEXT,
    "github" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "projectId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project.email_unique" ON "Project"("email");

-- AddForeignKey
ALTER TABLE "Image" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
