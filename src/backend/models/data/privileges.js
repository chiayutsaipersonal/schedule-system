module.exports = (sequelize, DataTypes) => {
    const Privileges = sequelize.define('privileges', {
        personnelId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            validate: { isUUID: 4 }
        },
        privilegeTypeId: { // 權限種類 (例：客戶、員工、廠商)
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        privilegeRoleId: { // 工作角色 (例：管理員、使用者、主管)
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 0 }
        },
        active: {
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
            singular: 'privilege',
            plural: 'privileges'
        }
    });
    return Privileges;
};
