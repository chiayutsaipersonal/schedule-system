module.exports = (sequelize, DataTypes) => {
    const GeneralAssignments = sequelize.define('generalAssignments', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: { isUUID: 4 }
        },
        personnelId: { // 責任人員
            type: DataTypes.UUID,
            allowNull: false,
            validate: { isUUID: 4 }
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
        principle: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
            singular: 'generalAssignment',
            plural: 'generalAssignments'
        }
    });
    return GeneralAssignments;
};
