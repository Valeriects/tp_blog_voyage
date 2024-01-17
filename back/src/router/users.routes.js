import { Router } from "express";

import { getUsersAll, getOneUserById } from "../controller/users.js";

const router = Router();

// afficher tous les users
router.use('/', getUsersAll);

// afficher un seul user
router.use('/:id', getOneUserById);


export default router;