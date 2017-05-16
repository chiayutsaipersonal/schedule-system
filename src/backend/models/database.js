import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import sqlite from '../config/sqlite.js';

const db = {};
const sequelize = new Sequelize(sqlite);
const modelCategories = ['reference', 'data'];

function toCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

modelCategories.forEach((category) => {
    db[category] = [];
    fs.readdirSync(path.join(__dirname, category))
        .filter((file) => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
        }).forEach((file) => {
            let moduleName = toCap(file.slice(0, -3));
            db[category].push(moduleName);
            db[moduleName] = require(path.join(__dirname, `${category}\\`, file))(sequelize, Sequelize);
        });
});

db.Jobs.belongsTo(db.Clients, { constraints: true, sourceKey: 'clientId', targetKey: 'id' });
db.Clients.hasMany(db.Jobs, { constraints: true });
db.Jobs.hasOne(db.JobTypes, { constraints: true, sourceKey: 'jobTypeId', targetKey: 'id' });
/*
db.JobTypes.hasMany(db.Jobs);
db.Jobs.hasOne(db.Personnel, { foreignKey: 'FK_jobs_personnel_createdBy', sourceKey: 'createdBy', targetKey: 'id' });
db.Jobs.hasOne(db.Personnel, { foreignKey: 'FK_jobs_personnel_updatedBy', sourceKey: 'updatedBy', targetKey: 'id' });
db.Jobs.hasOne(db.Personnel, { foreignKey: 'FK_jobs_personnel_deletedBy', sourceKey: 'deletedBy', targetKey: 'id' });
*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.modelCategories = modelCategories;
db.initialize = () => {
    let modelInitArray = [];
    modelCategories.forEach((category) => {
        db[category].forEach((model) => {
            modelInitArray.push(
                db[model].sync({ force: true }) // database will be wiped!!!
                // db[model].sync() // current database will be preserved
            );
        });
    });
    return Promise.all(modelInitArray);
};

module.exports = db;
