const express = require('express');
const app = express();
const port = 3000;

app.get('/api/exemplo', (req, res) => {
    res.json({ mensagem: 'Olá do backend!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
