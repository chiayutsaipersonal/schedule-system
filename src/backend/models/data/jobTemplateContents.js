module.exports = (sequelize, DataTypes) => {
    const JobTemplateContents = sequelize.define('jobTemplateContents', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: { isUUID: 4 }
        },
        jobTemplateId: { // 工作範本
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        productIndex: { // 範本產品編號區分
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phaseId: { // 歸屬工作階段
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productTypeId: { // 產品種類
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        taskTypeId: { // 工序種類
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        defaultDuration: { // 預設工序需時
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        displaySequence: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: { min: 0 }
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
            singular: 'jobTemplateContent',
            plural: 'jobTemplateContents'
        }
    });
    return JobTemplateContents;
};
