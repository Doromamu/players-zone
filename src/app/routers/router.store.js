import { Router } from "express";

const storeRouter = Router();

//TODO: Variables
let data;

storeRouter.get(
  '/discount',
  (req, res) => {
    res.status(200).render('index', {
      data: data,
      dirNavBar: 'components/nav-bar/nav-bar',
      dirMain: 'components/main/discount',
      dirFooter: 'components/footer/footer'
    });
  }
);

storeRouter.get(
  '/info',
  (req, res) => {
    res.status(200).render('index', ({
      data: data,
      dirNavBar: 'components/nav-bar/nav-bar',
      dirMain: 'components/main/info',
      dirFooter: 'components/footer/footer'
    }));
  }
);

storeRouter.get(
  '/home',
  (req, res) => {
    res.status(200).render('index',{
      data : data,
      dirNavBar : 'components/nav-bar/nav-bar',
      dirMain : 'components/main/home',
      dirFooter : 'components/footer/footer'
    });
  }
)

export default storeRouter;