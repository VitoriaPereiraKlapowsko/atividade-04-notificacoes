import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UsuarioInstance extends Model {
    id: number;
    email: string;
    senha: string;
    nome: string;
    disciplina: string;

}

export const Usuario = sequelize.define<UsuarioInstance>('Usuario', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    senha: {
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING,
        unique: true
    },
    disciplina: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    tableName: 'usuarios',
    timestamps: false
});