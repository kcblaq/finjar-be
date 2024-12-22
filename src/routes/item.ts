import { Router } from 'express';
import JarsController  from "../controller/jars";

const itemRouter = Router();

itemRouter.route("/:id")
.post(JarsController.createItem)
.get(JarsController.getUserJar)


export default itemRouter;