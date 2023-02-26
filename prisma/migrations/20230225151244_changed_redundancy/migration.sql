/*
  Warnings:

  - You are about to drop the column `BuyPrice` on the `Products` table. All the data in the column will be lost.
  - Added the required column `buyPrice` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "BuyPrice",
ADD COLUMN     "buyPrice" INTEGER NOT NULL;
