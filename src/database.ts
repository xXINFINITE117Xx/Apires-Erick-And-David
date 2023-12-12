import { createPool }  from 'mysql2/promise';

export  async function connect (){

      const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'Edfesian1234',
        database: 'db_biblioteca',
        connectionLimit :10
        
   })
   return connection;
  


}