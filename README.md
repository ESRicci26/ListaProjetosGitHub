# Projeto: Listagem de Repositórios da API do GitHub

Este projeto tem como objetivo listar os repositórios públicos de um usuário do GitHub, exibindo informações como nome, descrição e um link para
acessar o repositório diretamente.

## Funcionalidades

- **Listagem de Repositórios**: Exibe uma lista de repositórios públicos de um usuário do GitHub.
- **Carregamento Dinâmico**: Os repositórios são carregados dinamicamente através de uma requisição à API do GitHub.
- **Responsividade**: O layout é responsivo, adaptando-se a diferentes tamanhos de tela.
- **Efeitos Visuais**: Efeitos de hover nos cards dos repositórios para melhorar a experiência do usuário.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **`github.html`**: Contém a estrutura HTML da página.
2. **`github.css`**: Contém os estilos CSS para a página.
3. **`github.js`**: Contém a lógica JavaScript para buscar e exibir os repositórios.

### Arquivo `github.html`

Este arquivo contém a estrutura básica da página, incluindo um título e uma seção para exibir os repositórios. O `div` com o id `loading` é 
usado para mostrar uma mensagem de carregamento enquanto os repositórios são buscados.
A seção `lista-repositorios` é onde os repositórios serão renderizados dinamicamente.

### Arquivo `github.css`

Este arquivo contém os estilos CSS para a página. As classes e estilos são aplicados diretamente aos elementos HTML.
O layout é responsivo, utilizando `grid` para organizar os cards dos repositórios.


### Arquivo `github.js`

Este arquivo contém a lógica JavaScript para buscar os repositórios da API do GitHub e exibi-los na página.
A função `buscarRepositorios` faz a requisição à API e, em caso de sucesso, chama a função `exibirRepositorios` para renderizar os repositórios
na página.

## Personalização

- **Alterar o Usuário do GitHub**: Para listar os repositórios de outro usuário, basta alterar a URL no arquivo `github.js`:
  ```javascript
  const response = await fetch('https://api.github.com/users/OUTRO_USUARIO/repos?page=1&per_page=50');
  ```

- **Estilos**: Os estilos podem ser ajustados no arquivo `github.css` para personalizar a aparência da página.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma **issue** 
ou enviar um **pull request**.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### Explicação Adicional

- **API do GitHub**: O projeto utiliza a API pública do GitHub para buscar os repositórios. A URL usada é `https://api.github.com/users/ESRicci26/repos?page=1&per_page=50`,
onde `ESRicci26` é o nome de usuário do GitHub. Você pode alterar esse nome para buscar repositórios de outro usuário.
- **Responsividade**: O layout é responsivo, utilizando `grid` para organizar os cards dos repositórios.
Isso garante que a página se adapte a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

### Conclusão

Este projeto é uma ótima maneira de aprender como fazer requisições a APIs externas e como manipular o DOM para exibir dados dinamicamente em uma
página web. Ele também demonstra boas práticas de design responsivo e uso de efeitos visuais para melhorar a experiência do usuário.
