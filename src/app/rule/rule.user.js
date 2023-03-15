import { check } from "express-validator";

const registerRule = [
  check('firstName').custom(firstName =>{
    if(firstName.length < 18){
      return true;
    }else{
      return false;
    }  
  }),
  check('lastName').custom(lastName =>{
    if(lastName.length < 18){
      return true;
    }else{
      return false;
    }
  }),
  check('paternalLastName').custom(paternalLastName =>{
    if(paternalLastName.length < 20){
      return true;
    }else{
      return false;
    }
  }),
  check('MaternalLastName').custom(MaternalLastName =>{
    if(MaternalLastName.length < 20){
      return true;
    }else{
      return false;
    }
  }),
  check('yearsOld').custom(yearsOld =>{
    if(yearsOld.length < 3){
      return true;
    }else{
      return false;
    }
  }),
  check('postalCode').custom(postalCode =>{
    if(postalCode.length < 12){
      return true;
    }else{
      return false;
    }
  }),
  check('domicile').custom(domicile =>{
    if(domicile.length < 50){
      return true;
    }else{
      return false;
    }
  }),
  check('userName').custom(userName => {
    if(userName.length < 18){
      return true;
    }else{
      return false;
    }
  }),
  check('passWord').custom(passWord =>{
    if(passWord.length < 18){
      return true;
    }else{
      return false;
    }
  }),
  check('userEmail').custom(userEmail => {
    if(userEmail.length < 30){
      return true;
    }else{
      return false;
    }
  }),
  check('emailService').custom(emailService => {
    if(emailService.length <= 10){
      return true;
    }else{
      return false;
    }
  })
];

const loginRule = [
  check('userName').custom(userName => {
    if(userName.length < 18){
      return true;
    }else{
      return false;
    }
  }),
  check('passWord').custom(userPassWord =>{
    if(userPassWord.length < 18){
      return true;
    }else{
      return false;
    }
  })
];

export const userRule = {
    registerRule,
    loginRule,
};