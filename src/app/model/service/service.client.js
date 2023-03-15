import { connectionDB } from "../../database/database.conection";
import { User } from "../class/user";
import { Client } from "../class/client";

function generateId(newClient) {
  let year = new Date().getFullYear().toString();
  let id = year +
    newClient.firstName.charAt(0) +
    newClient.lastName.charAt(0) +
    newClient.paternalLastName.charAt(0) +
    newClient.MaternalLastName.charAt(0);
  return id;
}

async function register(newClient) {
  let id = generateId(newClient);
  const connection = await connectionDB.getConnection();
  await connection.query(
    `CALL bd_player_zone.tbl_cliente_usuario_insertar_sp(` +
    `'${id}',` +
    `'${newClient.firstName}',` +
    `'${newClient.lastName}',` +
    `'${newClient.paternalLastName}',` +
    `'${newClient.MaternalLastName}',` +
    `'${newClient.yearsOld}',` +
    `'${newClient.birthdate}',` +
    `'${newClient.postalCode}',` +
    `'${newClient.domicile}',` +
    `'${newClient.userName}',` +
    `'${newClient.passWord}',` +
    `${2},` +
    `'${newClient.userEmail}@` +
    `${newClient.emailService}'` +
    `);`
  );
  return new Promise(result => {
    result('Los datos se registraron exitosamente');
  });
}

async function login(userName, passWord) {
  const connection = await connectionDB.getConnection();
  let result = await connection.query(
    `CALL bd_player_zone.tbl_cliente_usuario_login_sp(` +
    `'${userName}',` +
    `'${passWord}'` +
    `);`
  );
  let userData = result[0][0];
  return new Promise(result => {
    if (userData !== undefined) {
      result(new Client(
        userData.id,
        userData.primer_nombre,
        userData.segundo_nombre,
        userData.apellido_paterno,
        userData.apellido_materno,
        userData.edad,
        userData.fecha_nacimiento,
        userData.codigo_postal,
        userData.domicilio,
        new User(
          userData.nombre_usuario,
          userData.contrasena,
          userData.tipo,
          userData.fecha_registro,
          userData.correo_electronico
        )
      ));
    }else{
      result(0); /*Cuando el usuario no se encuentra registrado*/
    }

  });
}

export const clientService = {
  register,
  login
};