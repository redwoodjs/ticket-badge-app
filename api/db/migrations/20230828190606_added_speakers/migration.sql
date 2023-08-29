/*
  Warnings:

  - You are about to drop the column `code` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Partner` table. All the data in the column will be lost.
  - Added the required column `speakerId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "speakerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Partner" DROP COLUMN "code",
DROP COLUMN "discount",
DROP COLUMN "endDate",
ADD COLUMN     "inPersonCode" TEXT,
ADD COLUMN     "inPersonDiscount" INTEGER,
ADD COLUMN     "inPersonEndDate" TIMESTAMP(3),
ADD COLUMN     "virtualCode" TEXT,
ADD COLUMN     "virtualDiscount" INTEGER,
ADD COLUMN     "virtualEndDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmed" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Speaker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "virtualCode" TEXT NOT NULL,
    "virtualDiscount" INTEGER NOT NULL,
    "virtualEndDate" TIMESTAMP(3),
    "inPersonCode" TEXT NOT NULL,
    "inPersonDiscount" INTEGER NOT NULL,
    "inPersonEndDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Speaker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Speaker_slug_key" ON "Speaker"("slug");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "Speaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
