"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const departamento_controller_1 = require("../controllers/departamento.controller");
router.route('/')
    .get(departamento_controller_1.getDepartamento)
    .post(departamento_controller_1.createDepartamento);
router.route('/:DepartamentoId')
    .get(departamento_controller_1.getDepartamentos)
    .delete(departamento_controller_1.deleteDepartamento)
    .put(departamento_controller_1.updateDepartamento);
exports.default = router;
