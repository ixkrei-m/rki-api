"use strict";

const tableName = "general";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      tableName,
      [
        {
          last_update: "25.11.2020, 00:00 Uhr",
          recovered: 656438,
          cases: 961320,
          deaths: 14771,
          created_at: "2020-11-25 10:00:00",
          updated_at: "2020-11-25 10:00:00",
        },
        {
          last_update: "26.11.2020, 00:00 Uhr",
          recovered: 676066,
          cases: 983588,
          deaths: 15160,
          created_at: "2020-11-26 10:00:00",
          updated_at: "2020-11-26 10:00:00",
        },
        {
          last_update: "27.11.2020, 00:00 Uhr",
          recovered: 696080,
          cases: 1006394,
          deaths: 15586,
          created_at: "2020-11-27 10:00:00",
          updated_at: "2020-11-27 10:00:00",
        },
        {
          last_update: "28.11.2020, 00:00 Uhr",
          recovered: 710991,
          cases: 1028089,
          deaths: 15965,
          created_at: "2020-11-28 10:00:00",
          updated_at: "2020-11-28 10:00:00",
        },
        {
          last_update: "29.11.2020, 00:00 Uhr",
          recovered: 722282,
          cases: 1042700,
          deaths: 16123,
          created_at: "2020-11-29 10:00:00",
          updated_at: "2020-11-29 10:00:00",
        },
        {
          last_update: "30.11.2020, 00:00 Uhr",
          recovered: 739068,
          cases: 1053869,
          deaths: 16248,
          created_at: "2020-11-30 10:00:00",
          updated_at: "2020-11-30 10:00:00",
        },
        {
          last_update: "01.12.2020, 00:00 Uhr",
          recovered: 758820,
          cases: 1067473,
          deaths: 16636,
          created_at: "2020-12-01 10:00:00",
          updated_at: "2020-12-01 10:00:00",
        },
        {
          last_update: "02.12.2020, 00:00 Uhr",
          recovered: 779531,
          cases: 1084743,
          deaths: 17123,
          created_at: "2020-12-02 10:00:00",
          updated_at: "2020-12-02 10:00:00",
        },
        {
          last_update: "03.12.2020, 00:00 Uhr",
          recovered: 799962,
          cases: 1106789,
          deaths: 17602,
          created_at: "2020-12-03 10:00:00",
          updated_at: "2020-12-03 10:00:00",
        },
        {
          last_update: "04.12.2020, 00:00 Uhr",
          recovered: 820587,
          cases: 1130238,
          deaths: 18034,
          created_at: "2020-12-04 10:00:00",
          updated_at: "2020-12-04 10:00:00",
        },
        {
          last_update: "05.12.2020, 00:00 Uhr",
          recovered: 835681,
          cases: 1153556,
          deaths: 18517,
          created_at: "2020-12-05 10:00:00",
          updated_at: "2020-12-05 10:00:00",
        },
        {
          last_update: "06.12.2020, 00:00 Uhr",
          recovered: 846377,
          cases: 1171323,
          deaths: 18772,
          created_at: "2020-12-06 10:00:00",
          updated_at: "2020-12-06 10:00:00",
        },
        {
          last_update: "07.12.2020, 00:00 Uhr",
          recovered: 863259,
          cases: 1183655,
          deaths: 18919,
          created_at: "2020-12-07 10:00:00",
          updated_at: "2020-12-07 10:00:00",
        },
        {
          last_update: "08.12.2020, 00:00 Uhr",
          recovered: 881822,
          cases: 1197709,
          deaths: 19342,
          created_at: "2020-12-08 10:00:00",
          updated_at: "2020-12-08 10:00:00",
        },
        {
          last_update: "09.12.2020, 00:00 Uhr",
          recovered: 902070,
          cases: 1218524,
          deaths: 19932,
          created_at: "2020-12-09 10:00:00",
          updated_at: "2020-12-09 10:00:00",
        },
        {
          last_update: "10.12.2020, 00:00 Uhr",
          recovered: 922119,
          cases: 1242203,
          deaths: 20372,
          created_at: "2020-12-10 10:00:00",
          updated_at: "2020-12-10 10:00:00",
        },
        {
          last_update: "11.12.2020, 00:00 Uhr",
          recovered: 942105,
          cases: 1272078,
          deaths: 20970,
          created_at: "2020-12-11 10:00:00",
          updated_at: "2020-12-11 10:00:00",
        },
        {
          last_update: "12.12.2020, 00:00 Uhr",
          recovered: 957469,
          cases: 1300516,
          deaths: 21466,
          created_at: "2020-12-12 10:00:00",
          updated_at: "2020-12-12 10:00:00",
        },
        {
          last_update: "13.12.2020, 00:00 Uhr",
          recovered: 967902,
          cases: 1320716,
          deaths: 21787,
          created_at: "2020-12-13 10:00:00",
          updated_at: "2020-12-13 10:00:00",
        },
        {
          last_update: "14.12.2020, 00:00 Uhr",
          recovered: 984208,
          cases: 1337078,
          deaths: 21975,
          created_at: "2020-12-14 10:00:00",
          updated_at: "2020-12-14 10:00:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(tableName, null, {});
  },
};
