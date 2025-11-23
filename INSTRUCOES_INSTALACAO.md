# 🚀 Instruções de Instalação - Site Equilíbrio Cognitivo

## 📋 Pré-requisitos

### Sistema Operacional
- Windows 10/11, macOS 10.15+, ou Linux Ubuntu 18.04+

### Software Necessário
- **Node.js 18+**: [Download aqui](https://nodejs.org/)
- **Python 3.11+**: [Download aqui](https://python.org/)
- **Git**: [Download aqui](https://git-scm.com/)

### Verificação dos Pré-requisitos
```bash
# Verificar Node.js
node --version  # Deve mostrar v18.0.0 ou superior

# Verificar Python
python --version  # Deve mostrar Python 3.11.0 ou superior

# Verificar Git
git --version  # Deve mostrar git version 2.0.0 ou superior
```

## 📁 Estrutura do Projeto

```
Site_Equilibrio_Cognitivo_Final.zip
├── equilibrio-cognitivo/          # Frontend React
├── calendar-api/                  # Backend Flask
├── RELATORIO_DESENVOLVIMENTO.md   # Relatório detalhado
└── INSTRUCOES_INSTALACAO.md       # Este arquivo
```

## 🔧 Instalação Passo a Passo

### 1. Extrair o Projeto
```bash
# Extrair o arquivo ZIP
unzip Site_Equilibrio_Cognitivo_Final.zip
cd Site_Equilibrio_Cognitivo_Final
```

### 2. Configurar o Frontend (React)

```bash
# Navegar para o diretório do frontend
cd equilibrio-cognitivo

# Instalar dependências
npm install
# OU se preferir usar pnpm:
# pnpm install

# Verificar se a instalação foi bem-sucedida
npm list react
```

### 3. Configurar o Backend (Flask)

```bash
# Navegar para o diretório do backend
cd ../calendar-api

# Criar ambiente virtual Python
python -m venv venv

# Ativar o ambiente virtual
# No Windows:
venv\Scripts\activate
# No macOS/Linux:
source venv/bin/activate

# Instalar dependências Python
pip install -r requirements.txt

# Verificar se a instalação foi bem-sucedida
pip list | grep Flask
```

### 4. Configurar Credenciais do Google Calendar (Opcional)

Para funcionalidade completa de agendamento:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a API do Google Calendar
4. Crie credenciais OAuth 2.0
5. Baixe o arquivo `client_secret.json`
6. Substitua o arquivo em `calendar-api/client_secret.json`

**Nota**: O projeto funciona sem credenciais reais, mas o agendamento não criará eventos reais.

## 🚀 Executando o Projeto

### Método 1: Execução Manual (Recomendado para Desenvolvimento)

#### Terminal 1 - Backend Flask
```bash
cd calendar-api
source venv/bin/activate  # No Windows: venv\Scripts\activate
python main.py
```
O backend estará disponível em: `http://localhost:5000`

#### Terminal 2 - Frontend React
```bash
cd equilibrio-cognitivo
npm run dev
# OU
pnpm run dev
```
O frontend estará disponível em: `http://localhost:5173`

### Método 2: Script de Inicialização (Windows)

Crie um arquivo `start.bat`:
```batch
@echo off
echo Iniciando Site Equilibrio Cognitivo...

start cmd /k "cd calendar-api && venv\Scripts\activate && python main.py"
timeout /t 3
start cmd /k "cd equilibrio-cognitivo && npm run dev"

echo Servidores iniciados!
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5000
pause
```

### Método 3: Script de Inicialização (macOS/Linux)

Crie um arquivo `start.sh`:
```bash
#!/bin/bash
echo "Iniciando Site Equilibrio Cognitivo..."

# Iniciar backend
cd calendar-api
source venv/bin/activate
python main.py &
BACKEND_PID=$!

# Aguardar backend inicializar
sleep 3

# Iniciar frontend
cd ../equilibrio-cognitivo
npm run dev &
FRONTEND_PID=$!

echo "Servidores iniciados!"
echo "Frontend: http://localhost:5173"
echo "Backend: http://localhost:5000"
echo "Pressione Ctrl+C para parar os servidores"

# Aguardar interrupção
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait
```

Tornar executável:
```bash
chmod +x start.sh
./start.sh
```

## 🌐 Acessando o Site

1. **Abra seu navegador**
2. **Acesse**: `http://localhost:5173`
3. **Teste as funcionalidades**:
   - Navegação entre seções
   - Modal de agendamento
   - Formulário de contato
   - Responsividade (redimensione a janela)

## 🔧 Solução de Problemas

### Problema: "Comando não encontrado"
**Solução**: Verifique se Node.js e Python estão instalados e no PATH do sistema.

### Problema: "Porta já em uso"
**Solução**: 
```bash
# Verificar processos usando as portas
netstat -ano | findstr :5173  # Windows
lsof -i :5173                 # macOS/Linux

# Matar processo se necessário
taskkill /PID <PID> /F        # Windows
kill -9 <PID>                 # macOS/Linux
```

### Problema: "Módulo não encontrado"
**Solução**:
```bash
# Frontend
cd equilibrio-cognitivo
rm -rf node_modules package-lock.json
npm install

# Backend
cd calendar-api
pip install --upgrade pip
pip install -r requirements.txt
```

### Problema: "Erro de CORS"
**Solução**: Verifique se o backend está rodando na porta 5000 e o frontend na 5173.

### Problema: "Banco de dados não encontrado"
**Solução**: O banco SQLite será criado automaticamente na primeira execução.

## 📱 Testando Responsividade

1. **Desktop**: Acesse normalmente
2. **Tablet**: Use DevTools (F12) e selecione iPad
3. **Mobile**: Use DevTools (F12) e selecione iPhone
4. **Teste real**: Acesse pelo IP local em dispositivos móveis

Para acessar de outros dispositivos na rede:
```bash
# Descobrir IP local
ipconfig  # Windows
ifconfig  # macOS/Linux

# Iniciar frontend com host
npm run dev -- --host
# Acessar de outros dispositivos: http://SEU_IP:5173
```

## 🔒 Configurações de Segurança

### Para Desenvolvimento Local
- CORS está habilitado para localhost
- Credenciais de teste incluídas
- Banco SQLite local

### Para Produção
- Configure CORS para domínio específico
- Use credenciais reais do Google
- Configure banco PostgreSQL/MySQL
- Implemente HTTPS
- Configure variáveis de ambiente

## 📊 Monitoramento

### Logs do Backend
```bash
# Ver logs em tempo real
tail -f calendar-api/logs/app.log  # Se configurado
```

### Logs do Frontend
- Abra DevTools (F12)
- Vá para a aba Console
- Monitore erros e avisos

### Performance
- Use Lighthouse no Chrome DevTools
- Monitore Network tab para requests
- Verifique tempo de carregamento

## 🚀 Deploy em Produção

### Frontend (Netlify/Vercel)
```bash
cd equilibrio-cognitivo
npm run build
# Upload da pasta dist/ para o serviço
```

### Backend (Heroku/DigitalOcean)
```bash
cd calendar-api
# Configurar variáveis de ambiente
# Deploy conforme documentação do provedor
```

## 📞 Suporte

### Problemas Técnicos
1. Verifique os logs de erro
2. Consulte a documentação oficial:
   - [React](https://react.dev/)
   - [Flask](https://flask.palletsprojects.com/)
   - [Vite](https://vitejs.dev/)

### Contato
- **Email**: suporte@equilibriocognitivo.com.br
- **Documentação**: Consulte RELATORIO_DESENVOLVIMENTO.md

## ✅ Checklist de Verificação

- [ ] Node.js 18+ instalado
- [ ] Python 3.11+ instalado
- [ ] Dependências do frontend instaladas
- [ ] Ambiente virtual Python criado
- [ ] Dependências do backend instaladas
- [ ] Backend rodando na porta 5000
- [ ] Frontend rodando na porta 5173
- [ ] Site acessível no navegador
- [ ] Modal de agendamento funcional
- [ ] Formulário de contato funcional
- [ ] Design responsivo testado

## 🎉 Pronto!

Seu site Equilíbrio Cognitivo está funcionando! 

**URLs importantes**:
- **Site**: http://localhost:5173
- **API**: http://localhost:5000
- **Documentação**: RELATORIO_DESENVOLVIMENTO.md

**Próximos passos**:
1. Configurar credenciais reais do Google
2. Personalizar conteúdo e imagens
3. Testar em dispositivos móveis
4. Preparar para deploy em produção

