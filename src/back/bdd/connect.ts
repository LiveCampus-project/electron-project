import { createConnection, Connection } from 'mysql2'
let conn:Connection|null = null;

try{
    conn = createConnection({host: '127.0.0.1', user: 'root', password:"", database: 'event_manager'});
    conn.connect(err=>console.log(err));
}
catch (err){
    console.log(err);
}

export default conn;

