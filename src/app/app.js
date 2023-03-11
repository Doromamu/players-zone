import express from 'express';
import morgan from 'morgan';

//Import de los Routers
import userRouter from './routers/router.user';

//TODO: Constantes
const app = express();
const PORT = 3000 || process.env.PORT;
const defaultRoute = '/api/PlayerZone';

//TODO: Se definira el puerto
app.set('port', PORT);

//TODO: Se configura el motor de las vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//TODO: Se configura el Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//TODO: Se agregan los routers
app.use(defaultRoute,userRouter);

//TODO: Se renderiza la pagina de la tienda.
app.get(defaultRoute + '/discount', (req,res) => { 
  res.render('index',{
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/discount',
    dirFooter : 'components/footer/footer'
  });
});

//TODO: Se renderiza la pagina de informacion sobre el sitio web.
app.get(defaultRoute + '/info', (req,res) => {
  res.render('index',({
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/info',
    dirFooter : 'components/footer/footer'
  }));
}); 

//TODO: Se renderizara la pagina de home de nuestro sitio web.
app.get(defaultRoute + '/home' ,(req,res) => {
  res.render('index',{
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/home',
    dirFooter : 'components/footer/footer'
  });
}); 

//TODO: Ruta del error 404
app.use('/', (req,res) => {
  res.render('index',{
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/err404',
    dirFooter : 'components/footer/footer'
  });
} );
export default app;