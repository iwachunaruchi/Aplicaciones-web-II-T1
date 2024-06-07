import { Router } from "express";
import { createFollow,getAllFollows } from "../controllers/followController";
const router = Router();
router.post('/',createFollow);
router.get('/',getAllFollows);

export default router