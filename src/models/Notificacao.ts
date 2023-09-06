import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface NotificacaoInstance extends Model {
    id: number;
    titulo: string;
    corpo: string;
    mostrar: boolean;
}

export const Notificacao = sequelize.define<NotificacaoInstance>('Notificacao', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING,
        unique: true
    },
    corpo: {
        type: DataTypes.STRING
    },
    mostrar: {
        type: DataTypes.BOOLEAN,

    },

}, {
    tableName: 'notificacao',
    timestamps: false
});