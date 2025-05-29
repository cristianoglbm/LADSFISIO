// filepath: d:\Lads\api_fisioterapia\src\config\db.ts
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis de ambiente do .env

const pool = mysql.createPool({
  host: process.env.DB_HOST, // Host do banco de dados no Docker
  port: parseInt(process.env.DB_PORT || "3306", 10), // Porta do banco de dados
  user: process.env.DB_USER, // Usuário do banco de dados
  password: process.env.DB_PASSWORD, // Senha do banco de dados
  database: process.env.DB_DATABASE, // Nome do banco de dados
  waitForConnections: true,
  connectionLimit: 10, // Limite de conexões no pool
  queueLimit: 0, // Sem limite na fila de espera por conexões
});

// Testa a conexão
pool
  .getConnection()
  .then((connection) => {
    console.log("Conectado ao banco de dados MySQL com sucesso!");
    connection.release(); // Libera a conexão de volta para o pool
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados MySQL:", err);
    process.exit(1); // Encerra o processo em caso de erro
  });

export default pool;
