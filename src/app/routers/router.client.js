import { Router } from "express";
import { userControl } from "../controller/control.client";
import { userRule } from "../rule/rule.user";
import { userFilter } from "../filter-system/user-filter";


const userRouter = Router();

userRouter.get(
  '/login',
  userControl.getViewUserLogin
);

userRouter.get(
  '/register',
  userControl.getViewUserRegister
);

userRouter.get(
  '/electronicwallet',
  userControl.getViewElectronicWallet
);

userRouter.get(
  '/notFound',
  userControl.getViewUserNotFound
);

userRouter.post(
  '/register',
  userRule.registerRule,
  userControl.createAccountUser
);

userRouter.post(
  '/login',
  userRule.loginRule,
  userControl.loginUser
);

export default userRouter;  
