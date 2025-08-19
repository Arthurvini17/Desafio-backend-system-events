/*
  Warnings:

  - You are about to drop the column `Nome` on the `Events` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "systemevents"."Events" DROP COLUMN "Nome",
ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "systemevents"."Users" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "systemevents"."Users"("email");
