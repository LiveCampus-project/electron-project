import { createConnection } from 'mysql2'

export default createConnection({ host: 'localhost', user: 'root', database: 'test' })