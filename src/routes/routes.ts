import { Router } from 'express';
const router = Router();

//controllers
import {createUser, readAllUser} from "../controllers/userController";
// import {createPet, readAllPets} from "../controllers/petController";
import petController from "../controllers/petController";

// Definição das rotas
router.post('/user', createUser);
router.get('/user', readAllUser);

router.post('/pet', petController.createPet);
router.get('/pet', petController.readAllPets);


export default router;

