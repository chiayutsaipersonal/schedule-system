module.exports = (sequelize, DataTypes) => {
    const ExternalPersonnelReferences = sequelize.define('externalPersonnelReferences', {
        personnelId: { // 系統內部人員資料 ID
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            validate: { isUUID: 4 }
        },
        externalId: { // 外部人員資料來源資料 ID (天心 ERP 資料表 SALM 欄位 SAL_NO)
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                isAlphanumeric: true, // 人員編號包含字母(例: 外勞)
                notEmpty: true
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        createdBy: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: { isUUID: 4 }
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedBy: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: { isUUID: 4 }
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedBy: {
            type: DataTypes.UUID,
            allowNull: true,
            validate: { isUUID: 4 }
        }
    }, {
        name: {
            singular: 'externalPersonnelReference',
            plural: 'externalPersonnelReferences'
        }
    });
    return ExternalPersonnelReferences;
};
