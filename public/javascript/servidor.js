const express = require('express');
const app = express();
const SRCPATH = 'C://Users//gusta//Desktop//4th//DAW1//p1//avaliacao-daw-01//src';
const PUBPATH = 'C://Users//gusta//Desktop//4th//DAW1//p1//avaliacao-daw-01//public';
app.use('/public', express.static(PUBPATH));
app.use('/static', express.static(SRCPATH));

app.get('/', (req, res)=>{
  res.sendFile(SRCPATH + '/views/index.html');
});

app.get('/aluno', (req, res)=>{
  res.sendFile(SRCPATH + '/views/aluno.html');
});

app.get('/eu', (req, res)=>{
  res.sendFile(SRCPATH + '/views/eu.html');
});

app.get('/duvida', (req, res)=>{
  res.sendFile(SRCPATH + '/views/duvida.html');
});

app.get('/confirmacao', (req, res)=>{
  res.send('<h1>SOBRE</h1><p>Dados enviados com sucesso!</p>');
});

app.listen(3000, ()=>{console.log('Servidor rodando!');})