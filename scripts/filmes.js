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
  }

  // Função para abrir o anúncio
  function abrirAnuncio() {
      document.getElementById('anuncio').style.display = 'flex';
  }

  // Função para fechar o anúncio
  function fecharAnuncio() {
      document.getElementById('anuncio').style.display = 'none';
  }

  // Adicionar evento de clique aos filmes
  const filmes = document.querySelectorAll('.movie');
  filmes.forEach(filme => {
    let assistido = false;
      filme.addEventListener('click', function() {
        if (assistido == false){
          // Exibe o anúncio quando um filme é clicado
          abrirAnuncio();
          assistido = true;
          // Após o anúncio ser fechado, o filme será "aberto" (simulação aqui)
          const nomeFilme = this.dataset.filme;
          setTimeout(function() {
              alert('Você está assistindo: ' + nomeFilme);
              fecharAnuncio();
          }, 1000); // Anúncio visível por 1 segundo antes de mostrar o filme
        }
      });
  });


