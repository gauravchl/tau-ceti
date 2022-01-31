import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Products extends Model {}

const columns = {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
};
const options = { sequelize, modelName: "Products" };

Products.init(columns, options);

export default Products;
