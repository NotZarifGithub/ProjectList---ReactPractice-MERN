import express from 'express';
import { createList, getList, deleteList, updateList } from '../controllers/listController.js';
import verifyToken from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createList);
router.delete('/delete/:id', verifyToken, deleteList);
router.post('/update/:id', verifyToken, updateList);
router.get('/get/:id', getList);

export default router;
