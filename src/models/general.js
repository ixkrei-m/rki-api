"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class General extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  General.init(
    {
      lastUpdate: DataTypes.STRING,
      recovered: DataTypes.NUMBER,
      cases: DataTypes.NUMBER,
      deaths: DataTypes.NUMBER,
    },
    {
      sequelize,
      tableName: "general",
      underscored: true,
    }
  );
  return General;
};
