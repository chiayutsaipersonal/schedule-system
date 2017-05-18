module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define('tasks', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: { isUUID: 4 }
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: { isUUID: 4 }
        },
        taskTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        phaseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: { isDate: true }
        },
        startedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: { isDate: true }
        },
        durationEstimate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: { isDate: true }
        },
        observable: {
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
            singular: 'task',
            plural: 'tasks'
        }
    });
    return Tasks;
};
