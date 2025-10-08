import express from 'express';
import { test } from "../controllers/pinController.js"

const router = express.Router();

router.get('/test1', test);

export default router;
