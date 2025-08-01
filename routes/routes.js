import express from 'express';
import { getAllProducts,updateProduct,addProduct,getProduct,deleteProduct } from '../controllers/api.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
