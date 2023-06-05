import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import UserService from "../service/userl";
const prisma = new PrismaClient();
class CustomerController {
  async allUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let customer = await UserService.AlluserService();
    return res.json(customer);
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Customer: any = await UserService.createUser(
      req.body.name,
      req.body.password,
      req.body.role
    );
    return res.json(Customer);
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Customer: any = await UserService.uptadeUser(
      req.body.userId,
      req.body.name,
      req.body.password,
      req.body.role
    );

    return res.json(Customer);
  }

  async deleteUser(req: Request, res: Response): Promise<any> {
    const result = await UserService.deleteuser(req.body.userId);
    return res.json(result);
  }
}
export default new CustomerController();
