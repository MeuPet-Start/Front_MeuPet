import axios from 'axios';

// Cria uma instância personalizada do Axios
const api = axios.create({
  baseURL: 'http://localhost:8080/', // Altere para a base URL do seu backend
  timeout: 10000, // Tempo limite para requisições (em milissegundos)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores de Requisição
api.interceptors.request.use(
  (config) => {
    // Adicione o token de autenticação se necessário
    const token = localStorage.getItem('authToken'); // Ajuste conforme a forma como você armazena o token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptores de Resposta
api.interceptors.response.use(
  (response) => {
    return response; // Retorna diretamente a resposta se não houver erros
  },
  (error) => {
    if (error.response?.status === 401) {
      // Exemplo: tratamento de erro 401 (não autorizado)
      alert('Sessão expirada. Faça login novamente.');
      // Redirecione para a página de login, se necessário
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;