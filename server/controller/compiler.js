const fs = require("fs")
const { exec } = require('child_process');

const CodeCompiler = (req,res)=>{
    const { code, language } = req.body;
    let command, fileName;
  
    switch (language) {
      case 'javascript':
        fileName = 'script.js';
        fs.writeFileSync(fileName, code);
        command = `node ${fileName}`;
        break;
      case 'python':
        fileName = 'script.py';
        fs.writeFileSync(fileName, code);
        command = `python ${fileName}`;
        break;
      case 'c':
        fileName = 'script.c';
        fs.writeFileSync(fileName, code);
        command = `gcc ${fileName} -o script && ./script`;
        break;
      case 'cpp':
        fileName = 'script.cpp';
        fs.writeFileSync(fileName, code);
        command = `g++ ${fileName} -o script && ./script`;
        break;
      default:
        return res.status(400).json({ error: 'Language not supported' });
    }
  
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(400).json({ error: stderr });
      }
      res.json({ output: stdout });
    });
}
module.exports = {CodeCompiler}