import app from './app/app';

function main (){
  app.listen(app.get('port') , (req,res) => {
    console.log(`El servidor esta escuchando en el ${app.get('port')}...`);
  });
}

main();