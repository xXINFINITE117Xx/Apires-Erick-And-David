import { Request, Response } from 'express';

import {connect} from '../database'

import {informe} from "../interfaces/informe";

export  async function getInforme(req: Request, res:Response): Promise<Response> {
   const conn = await connect();
   const informe = await conn.query ('SELECT * FROM informe')
   return res.json(informe[0]);
}

export async function createInforme(req: Request, res: Response) {
    const newPost: informe = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO informe SET?', [newPost])
    
    return res.json({
        message: 'Informe Created'
    })
}
export async function getInformes(req:Request, res:Response):Promise<Response> {
    const id = req.params.informeId;
    const conn = await connect();
    const informe = await conn.query('SELECT * FROM informe WHERE id_informe = ?', [id]);
    return res.json(informe[0]);
    
};

export async function deleteInforme(req:Request, res:Response) {
    const id = req.params.informeId;
    const conn = await connect();
    await conn.query('DELETE FROM informe WHERE id_informe = ?', [id]);
    return res.json({
        message: 'Informe deleted'
    });
    
};

export async function updateInforme(req:Request, res:Response) {
    const id = req.params.informeId;
    const updateInforme: informe = req.body;
    const conn = await connect();
    await conn.query('UPDATE informe set ? WHERE id_informe = ?', [updateInforme, id]);
    return res.json({
        message: 'Informe update'
    });

    
}


