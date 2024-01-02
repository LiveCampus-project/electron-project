import { createConnection } from 'mysql2'

export default createConnection({ host: 'localhost', user: 'root', database: 'event_manager' });

console.log("ici -> DB");