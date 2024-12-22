import { Router } from 'express';
import JarsController  from "../controller/jars";

const router = Router();

router.get("/:id", JarsController.getUserJar);
router.post("/:id", JarsController.createUserJar);




export default router;