/*
  Warnings:

  - You are about to drop the column `buyPrice` on the `Products` table. All the data in the column will be lost.
  - The `images` column on the `Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `BuyPrice` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rentPrice` on the `Products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "buyPrice",
ADD COLUMN     "BuyPrice" INTEGER NOT NULL,
DROP COLUMN "rentPrice",
ADD COLUMN     "rentPrice" INTEGER NOT NULL,
DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
