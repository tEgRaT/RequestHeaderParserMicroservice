1. create a new directory for the project and run npm init within
2. npm install --save express babel-core babel-register babel-preset-es2015
3. add a .gitignore file, write a line: node_modules
4. git init
5. for babel to work properly, add a .babelrc file to the project root with {"presets": ["es2015"]}
6. create an index.js and src directory at the prject root, and app.js file inside the src directory
7. for deploying to heroku, add a Procfile to the root directory, write: web: node index.js
