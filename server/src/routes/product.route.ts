import { Router } from "express";
import { getProducts } from "../controllers/product.controller";

const router = Router();

//GET
router.get('/', getProducts);



export default router;