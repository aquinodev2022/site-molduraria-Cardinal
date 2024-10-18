// Impede que o navegador restaure a posição de rolagem
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Seleciona todos os links da navbar
const links = document.querySelectorAll('.navbar-nav .nav-link');

// Obtém o nome do arquivo atual (última parte do caminho)
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Percorre os links e adiciona a classe 'active' ao correspondente
links.forEach(link => {
  const href = link.getAttribute('href').split('/').pop(); // Nome do arquivo no href
  
  if (currentPage === href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active'); // Garante que outros links não estejam ativos
  }
});
