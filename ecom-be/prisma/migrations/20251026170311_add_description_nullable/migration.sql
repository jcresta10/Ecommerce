-- CreateTable
CREATE TABLE "Cake" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "ingredients" TEXT[],
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cake_pkey" PRIMARY KEY ("id")
);
