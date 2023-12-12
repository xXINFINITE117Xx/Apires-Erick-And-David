import {Router} from 'express'
const router = Router();

import {getInforme, createInforme, getInformes, deleteInforme, updateInforme} from "../controllers/informe.controller";

router.route('/')
.get(getInforme)
.post(createInforme);

router.route('/:informeId')
    .get(getInformes)
    .delete(deleteInforme)
    .put(updateInforme)


export default router;