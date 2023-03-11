import { Router } from "express";
import { userControl } from "../controller/control.user";
import { userRule } from "../rule/rule.user";
import { userFilter } from "../filter-system/user-filter";


const userRouter = Router();

userRouter.get(
  '/user/login',
  userControl.getViewUserLogin
);

userRouter.get(
  '/user/register',
  userControl.getViewUserRegister
);

userRouter.get(
  '/user/electronicwallet',
  userControl.getViewElectronicWallet
);

userRouter.post(
  '/user/register',
  userRule.registerRule,
  userControl.createAccountUser
);

userRouter.post(
  '/user/login',
  userRule.loginRule,
  userControl.loginUser
);

export default userRouter;  