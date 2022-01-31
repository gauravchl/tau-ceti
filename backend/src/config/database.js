import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();
const { DATABASE_URL } = process.env;
const sequelize = new Sequelize(DATABASE_URL, { logging: false });

const onConnect = async () => {
  console.log("Connected to database");
  await sequelize.sync({ alter: true });
};

const onError = (err) => {
  console.error("Unable to connect to the database:", err.message);
};

sequelize.authenticate().then(onConnect).catch(onError);

export default sequelize;
