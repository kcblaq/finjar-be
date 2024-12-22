import { Router } from "express";
import userRoute from "./userRoutes";
import jarRoute from "./jars";
import itemRouter from "./item"

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
})

router.use("/users", userRoute);
router.use("/jars", jarRoute);
router.use("/items", itemRouter);





export default router;