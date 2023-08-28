/*
  Warnings:

  - Added the required column `code` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3);
