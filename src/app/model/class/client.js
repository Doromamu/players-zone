export class Client{
  #id;
  #firstName;
  #lastName;
  #paternalLastName;
  #maternalLastName;
  #yearsOld;
  #birthDate;
  #postalCode;  
  #domicile;
  #user;
  constructor(_id,_firtsName,_lastName,_paternalLastName,_maternalLastName,_yearsOld,
    _birthDate,_postalCode,_domicile,_user){
      this.#id = _id;
      this.#firstName = _firtsName;
      this.#lastName = _lastName;
      this.#paternalLastName = _paternalLastName;
      this.#maternalLastName = _maternalLastName;
      this.#yearsOld = _yearsOld;
      this.#birthDate = _birthDate;
      this.#postalCode = _postalCode;
      this.#domicile = _domicile;
      this.#user = _user;
  } 

  /*Getters*/
  getId(){
    return this.#id;
  }

  getFirstName(){
    return this.#firstName;
  }

  getLastName(){
    return this.#lastName;
  }

  getPaternalLastName(){
    return this.#paternalLastName;
  }

  getMaternalLastName(){
    return this.#maternalLastName;
  }

  getYearsOld(){
    return this.#yearsOld;
  }

  getBirthDay(){
    return this.#birthDate;
  }

  getPostalCode(){
    return this.#postalCode;
  }

  getDomicile(){
    return this.#domicile;
  }

  getUser(){
    return this.#user;
  }

  /*Setters*/
  setFirstName(newFirstName){
    this.#firstName = newFirstName;
  }

  setLastName(newLastName){
    this.#lastName = newLastName;
  }

  setPaternalLastName(newPaternalLastName){
    this.#paternalLastName = newPaternalLastName;
  }

  setMaternalLastName(newMaternalLastName){
    this.#maternalLastName = newMaternalLastName;
  }

  setYearsOld(newYearsOld){
    this.#yearsOld = newYearsOld;
  }

  setBirthDay(newBirthDay){
    this.#birthDate = newBirthDay;
  }

  setPostalCode(newPostalCode){
    this.#postalCode = newPostalCode;
  }

  setDomicile(newDomicilie){
    this.#domicile = newDomicilie;
  }
}