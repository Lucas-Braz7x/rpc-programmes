const cors = require('cors');
const app = require('./config/express')();

const port = app.get('port');

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
