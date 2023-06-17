import express from 'express';
import { createLabelHandler, getLabelsHandler } from '../controllers/label.controller';
import authMiddleware from '../middlewares/authMiddleware';
import validate from '../middlewares/validateResource';
import { createLabelSchema } from '../schema/label.schema';

const router = express.Router();

router.post('/api/label', authMiddleware, validate(createLabelSchema), createLabelHandler);

router.get('/api/label', authMiddleware, getLabelsHandler);

export default router;