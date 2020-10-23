#--------------------------------------------------------------

Visualizar projeto
#--------------------------------------------------------------

Baixe o projeto "https://github.com/WilliamDeveloper/nlw3_trilha_discovery.git"
Copie o conteudo da branche para uma pasta em "c:/nlw/"
Abra o terminal do git-bash
cd /c/nlw
Crie os dados do sqlite node src/database/test_criar_banco.js
Inicie o projeto npm start
Abre o browser na url "http://127.0.0.1:5500/"

start projeto nodejs
#-------------------------------------------------------------- cd /c/nlw mkdir -p /c/nlw/src touch /c/nlw/src/server.js touch /c/nlw/readme.md $ npn init -y

#--------------------------------------------------------------

dependencias
#-------------------------------------------------------------- #dependencia de webservice rotas npm install express

#Dependencia que da restart no servidor quando o arquivo se altera npm install nodemon

Dependencia para tranformar a pagina em algo tipo jsp https://handlebarsjs.com/
npm install hbs

sqlite
npm install sqlite-async

#--------------------------------------------------------------

package.json
#-------------------------------------------------------------- { "name": "nlw", "version": "1.0.0", "description": "", "main": "index.js", "scripts": { "start": "nodemon src/server.js" }, "keywords": [], "author": "", "license": "ISC", "dependencies": { "express": "^4.17.1", "hbs": "^4.1.1", "nodemon": "^2.0.5" } }

#--------------------------------------------------------------

teste com dados fake sqlite (ira criar database.sqlite com dados)
#-------------------------------------------------------------- node src/database/test_criar_banco.js node src/database/test_ver_dados.js
