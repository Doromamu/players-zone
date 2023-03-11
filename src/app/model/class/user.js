export class User {
  #userName;
  #passWord;
  #accesLevel;
  #registerDate;
  #email
  constructor(_userName, _password, _accesLevel, _registerDate,_email) {
    this.#userName = _userName;
    this.#passWord = _password;
    this.#accesLevel = _accesLevel;
    this.#registerDate = _registerDate;
    this.#email = _email;
  }

  /*Getters*/
  getUserName (){
    return this.#userName;
  }

  getPassWord(){
    return this.#passWord;
  }

  getAccesLevel(){
    return this.#accesLevel;
  }

  getRegisterDate(){
    return this.#registerDate;
  }

  getEmail(){
    return this.#email;
  }

  /*Setters*/
  setUserName(newUserName){
    this.#userName = newUserName;
  }

  setPassWord(newPassWord){
    this.#passWord = newPassWord;
  }

  setEmail(newEmail){
    this.#email = newEmail;
  }
}