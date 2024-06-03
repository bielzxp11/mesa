// pages/api/cadusuario.js
let usuarios = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    const novoUsuario = { id: Date.now(), nome, email, senha };
    usuarios.push(novoUsuario);
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
  } else if (req.method === 'GET') {
    return res.status(200).json(usuarios);
  } else {
    return res.status(405).json({ message: 'Método não permitido.' });
  }
}
