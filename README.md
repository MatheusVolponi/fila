# Fila de Tarefas

Este é um projeto de um simples gerenciador de tarefas (To-Do List) que permite ao usuário adicionar, visualizar, concluir e remover tarefas. As tarefas são agrupadas por data e salvas localmente no navegador usando o `LocalStorage`.

**[Acesse a versão online do projeto clicando aqui!](https://matheusvolponi.github.io/fila/)**

## ✨ Funcionalidades

- **Adicionar Tarefas:** Crie novas tarefas com descrição e data/hora.
- **Agrupamento por Data:** As tarefas são organizadas automaticamente sob suas respectivas datas, em ordem cronológica.
- **Marcar como Concluída:** Alterne o estado de uma tarefa entre pendente e concluída com um clique.
- **Remover Tarefas:** Exclua tarefas que não são mais necessárias.
- **Persistência de Dados:** Suas tarefas ficam salvas no navegador, então você não as perde ao recarregar a página.

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6 Modules)**
- **Moment.js** - Para manipulação e formatação de datas.

## 📂 Estrutura do Projeto

O código é organizado de forma modular para facilitar a manutenção e a compreensão.

```
├── components/
│   ├── completeTask.js   # Lógica do botão de concluir
│   ├── createDate.js     # Cria os cabeçalhos de data
│   ├── deleteTask.js     # Lógica do botão de remover
│   ├── loadTasks.js      # Carrega e renderiza as tarefas na tela
│   └── newTask.js        # Lógica para criar novas tarefas e o componente da tarefa
├── services/
│   └── date.js           # Funções utilitárias para ordenar e filtrar datas
├── index.html            # Arquivo principal da aplicação
├── main.js               # Ponto de entrada do JavaScript, inicializa os eventos
└── README.md             # Este arquivo :)
```

## 🏁 Como Executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador de preferência.
3. Pronto! Comece a adicionar suas tarefas.

---

## ✒️ Autoria

Projeto desenvolvido por **[Seu Nome Aqui]**.