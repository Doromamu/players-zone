import express from 'express';
import morgan from 'morgan';

//Import de los Routers
import userRouter from './routers/router.client';
import storeRouter from './routers/router.store';

//TODO: Constantes
const app = express();
const PORT = 3000 || process.env.PORT;
const basePath = '/api/players-zone';

//TODO: Variables
let data;

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
app.use(basePath + '/client',userRouter);
app.use(basePath + '/store',storeRouter)

//TODO: Ruta del error 404
app.use('/', (req,res) => {
  res.status(404).render('index',{
    data : data,
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/err404',
    dirFooter : 'components/footer/footer'
  });
});
export default app;