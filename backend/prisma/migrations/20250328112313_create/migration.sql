-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "messages" TEXT[],

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);
