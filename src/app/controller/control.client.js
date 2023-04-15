import { clientService } from "../model/service/service.client";
import { validationResult } from "express-validator";

//TODO: Declaracion de variables.
let errList;
let data;

function getViewUserLogin(req, res) {
  res.status(200).render('index',({
    data : data,
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/login',
    dirFooter : 'components/footer/footer'
  }));
}

function getViewUserRegister(req,res){
  res.status(200).render('index',({
    data : data,
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/register',
    dirFooter : 'components/footer/footer'
  }));
}

function getViewElectronicWallet(req,res){
  res.status(200).render('index',({
    data : data,
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/electronic-wallet',
    dirFooter : 'components/footer/footer'
  }));
}

function getViewUserNotFound(req,res){
  res.status(403).render('index',({
    data : data,
    dirNavBar : 'components/nav-bar/nav-bar',
    dirMain : 'components/main/err403',
    dirFooter : 'components/footer/footer'
  }));
}

async function createAccountUser(req,res){
  let newClient = req.body;
  errList = validationResult(req);
  if(errList.isEmpty()){
    return clientService.register(newClient).then(result =>{
      res.status(201).send(result);
    }).catch(err => {
      res.status(501).send('No se pudo realizar la trasaccion :(\n'+
      'El error fue: ' + err);
    });
  }else{
    res.status(400).redirect('/api/PlayerZone/user/register');
  }
}

async function loginUser(req,res){
  errList = validationResult(req);
  console.log(errList);
  if(errList.isEmpty()){
    let {userName,passWord} = req.body;
    return clientService.login(userName,passWord).then(result =>{
      if(result !== 0){
        res.redirect('/api/PlayerZone/home');
      }else{
        res.redirect('/api/PlayerZone/user/notFound');
      }
    }).catch(err => {
      console.log(`El error fue: ${err}`);
      res.status(500).render(/*
      Se tiene que hacer una pagina visualizar el error 501
      */);
    });  
  }else{
    res.status(400).redirect('/api/PlayerZone/user/login');
  }
}

export const userControl = {
  getViewUserLogin,
  getViewUserRegister,
  getViewElectronicWallet,
  getViewUserNotFound,
  createAccountUser,
  loginUser
}; 