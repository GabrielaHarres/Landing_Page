document.getElementById("compromissoForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      especialidade: document.getElementById("especialidade").value,
      dataCompromisso: document.getElementById("dataCompromisso").value,
    };
  
    console.log("Dados coletados:", formData); 
  
    fetch("http://localhost:3333/agendarCompromisso", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => { 
      if (!response.ok) {
        throw new Error("Erro ao enviar os dados.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Sucesso:", data);
      alert("Compromisso marcado com sucesso!");
  
      document.getElementById('nome').value = "";
      document.getElementById('email').value = "";
      document.getElementById('especialidade').selectedIndex = 0; 
      document.getElementById('dataCompromisso').value = "";
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao marcar o compromisso.");
    });
  });
  
  