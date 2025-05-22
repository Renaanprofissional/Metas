 const linkPrincipal = document.querySelector('.com-categorias .link-principal');
  const categorias = document.querySelector('.com-categorias .categorias');
  const navLinks = document.querySelectorAll('nav a');

  function toggleCategorias(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Esconde todas as outras categorias abertas
    document.querySelectorAll('.com-categorias.ativo .categorias').forEach(cat => {
      if (cat !== categorias) {
        cat.style.display = 'none';
        cat.parentNode.classList.remove('ativo');
      }
    });

    // Alterna a visibilidade da categoria atual
    categorias.style.display = categorias.style.display === 'block' ? 'none' : 'block';
    linkPrincipal.parentNode.classList.toggle('ativo');
  }

  // Adiciona um evento de clique ao link principal
  linkPrincipal.addEventListener('click', toggleCategorias);

  // Adiciona um evento de clique a todos os links da navegação para fechar as categorias ao clicar em outro link
  navLinks.forEach(link => {
    if (link !== linkPrincipal) {
      link.addEventListener('click', () => {
        categorias.style.display = 'none';
        linkPrincipal.parentNode.classList.remove('ativo');
      });
    }
  });