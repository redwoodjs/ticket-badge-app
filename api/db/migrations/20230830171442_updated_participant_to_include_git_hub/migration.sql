/*
  Warnings:

  - You are about to drop the column `firstName` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Participant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "githubId" INTEGER,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "twitter" TEXT;
