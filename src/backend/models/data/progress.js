module.exports = (sequelize, DataTypes) => {
    const Progress = sequelize.define('progress', {
        taskId: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: { isUUID: 4 }
        },
        progressTypeId: { // 百分比，數量，時間
            type: DataTypes.INTEGER,
            allowNull: false
        },
        target: { // 目標
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currentStanding: { // 目前累計
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dailyRate: { // 預計日產能
            type: DataTypes.INTEGER,
            allowNull: true
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
            singular: 'progress',
            plural: 'progress'
        }
    });
    return Progress;
};
