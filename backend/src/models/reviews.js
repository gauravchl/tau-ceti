import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Products from "./products";

class Reviews extends Model {}

const columns = {
  rating: DataTypes.INTEGER,
  review: DataTypes.STRING,
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "id",
    },
  },
};
const options = { sequelize, modelName: "Reviews" };

Reviews.init(columns, options);
Reviews.belongsTo(Products, {
  as: "product",
  foreignKey: "productId",
});
Products.hasMany(Reviews, {
  as: "reviews",
  foreignKey: "productId",
});

export default Reviews;
