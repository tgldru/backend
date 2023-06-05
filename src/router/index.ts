import { Request, Response, NextFunction, Router } from "express";
import userRouter from "./user";


const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "success",
    status_code: 0,
    message: "API is running",
  });
});
// router.post("/login", Login.token);
router.use("/user", userRouter);


export default router;

