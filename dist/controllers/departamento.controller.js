"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDepartamento = exports.deleteDepartamento = exports.getDepartamentos = exports.createDepartamento = exports.getDepartamento = void 0;
const database_1 = require("../database");
function getDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const departamento = yield conn.query('SELECT * FROM departamento');
        return res.json(departamento[0]);
    });
}
exports.getDepartamento = getDepartamento;
;
function createDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO departamento SET?', [newPost]);
        return res.json({
            message: 'Departamento Created'
        });
    });
}
exports.createDepartamento = createDepartamento;
function getDepartamentos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.DepartamentoId;
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM departamento WHERE id_departamento = ?', [id]);
        return res.json(posts[0]);
    });
}
exports.getDepartamentos = getDepartamentos;
;
function deleteDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.DepartamentoId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM departamento WHERE id_departamento = ?', [id]);
        return res.json({
            message: 'Departamento deleted'
        });
    });
}
exports.deleteDepartamento = deleteDepartamento;
;
function updateDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.DepartamentoId;
        const updateDepartamento = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE departamento set ? WHERE id_departamento = ?', [updateDepartamento, id]);
        return res.json({
            message: 'departamento update'
        });
    });
}
exports.updateDepartamento = updateDepartamento;
