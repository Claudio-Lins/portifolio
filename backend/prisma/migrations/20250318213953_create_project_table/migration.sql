-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagesUrl" TEXT[],
    "level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "highlight" BOOLEAN NOT NULL DEFAULT false,
    "repositoryUrl" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
