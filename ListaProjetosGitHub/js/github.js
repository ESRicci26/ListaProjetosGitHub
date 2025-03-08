document.addEventListener("DOMContentLoaded", function () {
  const listaRepositorios = document.getElementById("lista-repositorios");
  const loading = document.getElementById("loading");

  const buscarRepositorios = async () => {
    try {
      const response = await fetch('https://api.github.com/users/ESRicci26/repos?page=1&per_page=50');
      if (!response.ok) {
        throw new Error('Erro ao buscar repositórios');
      }
      const data = await response.json();
      exibirRepositorios(data);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      loading.style.display = "none";
    }
  };

  const exibirRepositorios = (repositories) => {
    if (repositories.length > 0) {
      const repositoriosHTML = repositories.map(repo => `
        <div class="repositorio">
          <h3>${repo.name}</h3>
          <p>${repo.description || 'Sem descrição disponível'}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </div>
      `).join("");
      listaRepositorios.innerHTML = repositoriosHTML;
    } else {
      listaRepositorios.innerHTML = "<p>Nenhum repositório encontrado.</p>";
    }
  };

  buscarRepositorios();
});