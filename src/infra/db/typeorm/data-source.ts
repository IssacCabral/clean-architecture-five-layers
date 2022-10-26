import env from "../../config/env";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "mysql",
  host: env.TYPEORM_HOST,
  port: Number(env.TYPEORM_PORT),
  username: env.TYPEORM_USERNAME,
  password: env.TYPEORM_PASSWORD,
  database: env.TYPEORM_DATABASE,
  migrations: [__dirname + "/migrations/*{.ts,.js}"],
  entities: [__dirname + "/entities/*{.ts,.js}"],
});

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default dataSource;
