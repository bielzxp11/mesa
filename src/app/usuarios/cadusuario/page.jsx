// cadusuario/page.jsx
import { useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';

const CadUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cadusuario', { nome, email, senha });
      setMensagem(response.data.message);
    } catch (error) {
      setMensagem('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label>Senha:</label>
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
      {mensagem && <p className={styles.message}>{mensagem}</p>}
    </div>
  );
};

export default CadUsuario;
