/*
  Warnings:

  - You are about to drop the column `speakerId` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the `Speaker` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `avatar` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_speakerId_fkey";

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "speakerId";

-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Speaker";

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
