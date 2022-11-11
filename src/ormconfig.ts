import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type:"postgres",
    host:"localhost",
    port:5454,
    username:"postgres",
    password: '123',
    database:"nestjs",
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    migrations: [__dirname+'/migrations/**/*{.ts,.js}'],
    synchronize: false,
}

export default config