"use strict";

const { Model } = require("sequelize");
const moment = require("moment");

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
      date: DataTypes.VIRTUAL,
      lastUpdate: DataTypes.STRING,
      recovered: DataTypes.NUMBER,
      cases: DataTypes.NUMBER,
      dailyCases: DataTypes.VIRTUAL,
      dailyDeaths: DataTypes.VIRTUAL,
      dailyRecovered: DataTypes.VIRTUAL,
      deaths: DataTypes.NUMBER,
    },
    {
      sequelize,
      tableName: "general",
      underscored: true,
    }
  );

  // setting virtual fields and remove first element
  General.afterFind("infections-per-day", (general, options) => {
    if (Array.isArray(general)) {
      general.forEach((general, i, self) => {
        const date = moment(general.createdAt).subtract(1, "day");
        general.set("date", date);

        if (i > 0) {
          general.set("dailyCases", general.cases - self[i - 1].cases);
          general.set("dailyRecovered", general.recovered - self[i - 1].recovered);
          general.set("dailyDeaths", general.deaths - self[i - 1].deaths);
        } else {
          general.set("dailyCases", null);
          general.set("dailyRecovered", null);
          general.set("dailyDeaths", null);
        }
      });

      general.shift();
    }
  });

  return General;
};
