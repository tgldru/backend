import { Router } from "express";
import UserController from "../../controller/user";

const router = Router();

router.get("/all", UserController.allUser);
router.post("/create", UserController.createUser);
router.post("/update", UserController.updateUser);
router.delete("/delete", UserController.deleteUser);

export default router;
