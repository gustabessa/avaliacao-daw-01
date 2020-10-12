var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() { 
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
              aCallback(anHttpRequest.responseText);
      }

      anHttpRequest.open( "GET", aUrl, true );            
      anHttpRequest.send( null );
  }
}

const client = new HttpClient();

client.get('public/json/avaliacao1.json', function(res) {
    carregarLista(res);
});

function carregarLista(jsonGerado) {
  const JsonAlunos = JSON.parse(jsonGerado);

  let tabela = document.getElementsByClassName("tabela")[0];
  
  for (let i = 0; i < JsonAlunos.length; i++) {
    
    let nomeAluno = JsonAlunos[i].nome;
    let indiceAluno = i+1;
    let emailAluno = JsonAlunos[i].email;
    if (nomeAluno === 'Gustavo William de Bessa') {
      nomeAluno = '<a href="static/views/eu.html" class="eu-tabela">' + nomeAluno + '</a>';
      indiceAluno = '<a href="static/views/eu.html" class="eu-tabela">' + indiceAluno + '</a>';
      emailAluno = '<a href="static/views/eu.html" class="eu-tabela">' + emailAluno + '</a>';
    }

    let tableRow = document.createElement('tr');

    let rowIndex = document.createElement('th');
    rowIndex.innerHTML = indiceAluno;
    let tdNome = document.createElement('td');
    tdNome.innerHTML = nomeAluno;
    let tdEmail = document.createElement('td');
    tdEmail.innerHTML = emailAluno;

    tableRow.append(rowIndex);
    tableRow.append(tdNome);
    tableRow.append(tdEmail);
    
    tabela.append(tableRow);
  } 
}