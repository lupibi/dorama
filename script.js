document.getElementById("form-opiniao").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const nome = document.getElementById("nome").value;  
    const opiniao = document.getElementById("opinião").value; 
    
    
    if (nome && opiniao) {
        const mensagem = `Obrigado pela sua opinião, ${nome}! Estamos ansiosos para saber mais sobre o que você pensa sobre as séries coreanas!`;
        document.getElementById("mensagem").textContent = mensagem;  

        
        document.getElementById("nome").value = '';
        document.getElementById("opinião").value = '';
    } else {
        
        document.getElementById("mensagem").textContent = "Por favor, preencha todos os campos!";
        document.getElementById("mensagem").style.color = "#dc3545";
    }
});
