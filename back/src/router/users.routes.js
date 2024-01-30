import { Router } from "express";

import { getUsersAll, upUser, deleteUser } from "../controller/users.js";

const router = Router();

// afficher tous les users
router.get('/', getUsersAll);


router.patch('/modify/:id', upUser);

router.delete('/delete/:id', deleteUser)


export default router;