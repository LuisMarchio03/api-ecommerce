import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  // return createConnection(
  //   Object.assign(defaultOptions, {
  //     database:
  //       process.env.NODE_ENV === "test"
  //         ? "database_ecommerce_v1_test"
  //         : defaultOptions.database,
  //   })
  // );

  return createConnection(
    Object.assign(defaultOptions, {
      type: process.env.NODE_ENV === "test" ? "sqlite" : defaultOptions.type,
      database:
        process.env.NODE_ENV === "test"
          ? "./src/__tests__/typeorm/db-tests/database.test.sqlite"
          : defaultOptions.database,
    })
  );
};
