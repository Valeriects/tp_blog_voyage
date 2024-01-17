import { Router } from "express";
import { userLogin, userRegister, userDeco } from "../controller/connection.js";

const router = Router();


router.post('/', userLogin);

router.post('/inscription', userRegister);

router.get('/deconnection', userDeco);



export default router;