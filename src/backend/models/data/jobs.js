module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define('jobs', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: { isUUID: 4 }
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jobTypeId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        clientId: {
            type: DataTypes.UUID,
            allowNull: true,
            validate: { isUUID: 4 }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: { isDate: true }
        },
        observable: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        createdBy: {
            type: DataTypes.UUID,
            allowNull: true,
            validate: { isUUID: 4 }
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        updatedBy: {
            type: DataTypes.UUID,
            allowNull: true,
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
            singular: 'job',
            plural: 'jobs'
        }
    });
    return Jobs;
};

/*
import Sequelize from 'sequelize';
import { sequelize } from '../../config/database.js';

export const Jobs = sequelize.define('jobs', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        validate: { isUUID: 4 }
    },
    jobTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reference: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clientId: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: { isUUID: 4 }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    deadline: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: { isDate: true }
    },
    observable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    createdBy: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: { isUUID: 4 }
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedBy: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: { isUUID: 4 }
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    deletedBy: {
        type: Sequelize.UUID,
        allowNull: true,
        validate: { isUUID: 4 }
    }
}, {
    name: {
        singular: 'job',
        plural: 'jobs'
    }
});

*/
