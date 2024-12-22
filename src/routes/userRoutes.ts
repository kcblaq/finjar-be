import { Router } from "express";
import userController from "../controller/user";
import validateUser from "../midlewares/validateUser";
import errorHandler from "../midlewares/errorHandler";

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", validateUser, userController.createUser);
router.use(errorHandler);


export default router;