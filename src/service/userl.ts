import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserService {
  async AlluserService(): Promise<any> {
    let user = await prisma.user.findMany();
    return user;
  }
  async createUser(
    name: string,
    password: string,
    role: string,
  ): Promise<any> {
    let Customer: any = await prisma.user.create({
      data: {
        name: name,
        password: password,
        role: role,
      },
    });

    return Customer;
  }
  async uptadeUser(
    userId: number,
    name: string,
    password: string,
    role: string,
  ): Promise<any> {
    let customer: any = await prisma.user.update({
      data: {
        name: name,
        password: password,
        role: role,
      },
      where: {
        userId: userId,
      },
    });

    return customer;
  }

 
  async deleteuser(    userId: number ): Promise<any> {
    try {
      await prisma.user.findUniqueOrThrow({
        where: {
          userId: userId,
        },
      })
      await prisma.user.delete({
        where: {
          userId: userId,
        },
      });
      return "actor deleted"
      
    } catch (error: any) {
      return `${error}`;
    }
  }
}
export default new UserService();
