function adicionarTarefa() {
    // 1. CAPTURA DE ELEMENTOS DO DOM
    const inputTarefa = document.getElementById("inputTarefa");
    const mensagem = document.getElementById("mensagem");
    const listaTarefas = document.getElementById("listaTarefas");

    // 2. TRATAMENTO DOS DADOS DE ENTRADA
    // .trim() remove espaços em branco extras no início e no fim do texto
    let tarefa = inputTarefa.value.trim();

    // 3. VALIDAÇÃO E LÓGICA PRINCIPAL
    if (tarefa === "") {
        // Fluxo de Erro: Caso o campo esteja vazio ou apenas com espaços
        mensagem.textContent = "Digite uma tarefa para adicionar em sua lista!";
        mensagem.style.color = "red"; // Dica extra: mudar a cor para indicar erro
    } else {
        // Fluxo de Sucesso: O campo contém texto válido
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "green"; // Dica extra: mudar para verde

        // Criação de novos elementos no DOM
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;

        // Inserção do novo elemento na árvore do HTML (DOM)
        // 
        listaTarefas.appendChild(novaTarefa);
    }

    // 4. LIMPEZA E RESET
    // Garante que o campo fique pronto para a próxima digitação, independente de erro ou sucesso
    inputTarefa.value = "";
    
    // Devolve o foco (o cursor) para o input automaticamente
    inputTarefa.focus();
}