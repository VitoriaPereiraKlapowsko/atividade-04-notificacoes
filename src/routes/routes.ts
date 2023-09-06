import { Router } from 'express';
const fb = require('fibonacci');


import * as ApiController from '../controllers/apiController';


const router = Router();

// Rota para verificar se o servidor está ativo
router.get('/ping', ApiController.ping);

// Rota para cadastrar um novo usuário
router.post('/cadastrarUsuario', ApiController.cadastrarUsuario);

// Rota para fazer login
router.post('/fazerLogin', ApiController.fazerLogin);

// Rota para listar os emails dos usuários
router.get('/listarEmails', ApiController.listarEmails);

// Rota para listar todos os usuários
router.get('/listarTodosUsuarios', ApiController.listarTodosUsuarios);

// Rota para deletar um usuário
router.delete('/deletarUsuario/:id', ApiController.deletarUsuario);

// Rota para atualizar um usuário
router.put('/atualizarUsuario/:id', ApiController.atualizarUsuario);

// Rota para pegar usuario por id
router.get('/pegarUsuarioPeloId/:id', ApiController.pegarUsuarioPeloId);

// Rota para listar notificacoes
router.get('/mostrarNotificacao', ApiController.mostrarNotificacao);

// Rota para cadastrar uma nova notificacao
router.patch('/atualizarNotificacao', ApiController.atualizarNotificacao);









export default router;
