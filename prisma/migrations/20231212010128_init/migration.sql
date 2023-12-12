/*
  Warnings:

  - You are about to drop the column `createdById` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `Group` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_memberId_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "createdById",
DROP COLUMN "updatedById",
ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "memberId",
ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "GroupMembers" (
    "groupId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupMembers_groupId_memberId_key" ON "GroupMembers"("groupId", "memberId");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembers" ADD CONSTRAINT "GroupMembers_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembers" ADD CONSTRAINT "GroupMembers_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
