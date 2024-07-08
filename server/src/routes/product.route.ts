import { Router } from "express";
import { getProducts } from "../controllers/product.controller";
import validateToken from "./validate-token.route";

const router = Router();

//GET
router.get('/', validateToken, getProducts);



export default router;