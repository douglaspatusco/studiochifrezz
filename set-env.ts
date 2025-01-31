const fs = require('fs');
const { execSync } = require('child_process');

// Lê o arquivo .env
const envFile = fs.readFileSync('.env.local', 'utf-8');

// Extrai as variáveis do arquivo .env
const envVariables = envFile.split('\n').filter(line => line.trim() && !line.startsWith('#'));

envVariables.forEach((line) => {
  const [name, value] = line.split('=');

  if (name && value) {
    console.log(`Enviando variável: ${name}`);

    // Envia a variável para a Vercel para o ambiente de produção
    execSync(`vercel env add ${name} ${value} production`, { stdio: 'inherit' });
    execSync(`vercel env add ${name} ${value} preview`, { stdio: 'inherit' });
    execSync(`vercel env add ${name} ${value} development`, { stdio: 'inherit' });
  }
});

console.log('Variáveis enviadas com sucesso!');
