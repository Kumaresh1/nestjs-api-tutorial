/*
  Warnings:

  - Added the required column `category` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory1` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory2` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory3` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "subCategory1" TEXT NOT NULL,
ADD COLUMN     "subCategory2" TEXT NOT NULL,
ADD COLUMN     "subCategory3" TEXT NOT NULL;
