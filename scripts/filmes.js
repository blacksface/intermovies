// Função para simular o login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lógica de validação simples
    if (username && password) {
      // Salva a informação de login no localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // Fechar o pop-up de login
      document.querySelector('.login-modal').style.display = 'none';

      // Exibir a seção de filmes
      document.querySelector('.movie-row').style.display = 'block';
    } else {
      alert("Por favor, insira seu nome de usuário e senha.");
    }
  }

  // Função para verificar o login
  window.onload = function () {
    var isLoggedIn = localStorage.getItem('isLoggedIn'); // Verifica se existe o item no localStorage

    if (isLoggedIn === 'true') {
      // Se o usuário já estiver logado, mostra a seção de filmes
      document.querySelector('.movie-row').style.display = 'block';
    } else {
      // Se não estiver logado, exibe o pop-up de login
      document.querySelector('.login-modal').style.display = 'flex';
    }
  };