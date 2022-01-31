import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Reviews extends Model {}

const columns = {
  rating: DataTypes.INTEGER,
  review: DataTypes.STRING,
};
const options = { sequelize, modelName: "Reviews" };

Reviews.init(columns, options);

export default Reviews;
