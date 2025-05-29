import bcrypt from "bcrypt";
import pool from "../config/db"; // Certifique-se de que o caminho está correto

async function seedDatabase() {
  try {
    // Criptografar a senha "123"
    const senhaHash = await bcrypt.hash("123", 10);

    // Query para inserir o usuário no banco de dados
    const query = `
      INSERT INTO usuarios (nome_completo, email, senha_hash, telefone, cpf, semestre)
      VALUES ('Usuário Teste', 'teste2@gmail.com', ?, '123456789', '12345678900', '1º Semestre')
      ON DUPLICATE KEY UPDATE email = email;
    `;

    // Executar a query
    await pool.query(query, [senhaHash]);
    console.log("Usuário de teste adicionado ao banco de dados.");
  } catch (error) {
    console.error("Erro ao adicionar usuário de teste:", error);
  }
}

// Chamar a função para adicionar o usuário
seedDatabase().then(() => {
  console.log("Usuário de teste adicionado com sucesso.");
}).catch((error) => {
  console.error("Erro ao adicionar usuário de teste:", error);
});