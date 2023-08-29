/*
  Warnings:

  - You are about to drop the column `typeId` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Partner" DROP CONSTRAINT "Partner_typeId_fkey";

-- AlterTable
ALTER TABLE "Partner" DROP COLUMN "typeId";

-- DropTable
DROP TABLE "Type";
