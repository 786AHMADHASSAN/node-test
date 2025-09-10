const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js on AWS with ECR + CodeBuild!. To confirm cicd pipelines finally');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
