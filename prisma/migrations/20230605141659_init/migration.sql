-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "role" VARCHAR(20) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Clothes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "userUserId" INTEGER NOT NULL,

    CONSTRAINT "Clothes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clothes" ADD CONSTRAINT "Clothes_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
