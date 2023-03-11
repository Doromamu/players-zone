CREATE DATABASE bd_player_zone;
DROP DATABASE bd_player_zone;

USE bd_player_zone;

CREATE TABLE tbl_perfil (
	id INT2 AUTO_INCREMENT,
    tipo VARCHAR(15),
    PRIMARY KEY(id)
);

CREATE TABLE tbl_usuario(
	id VARCHAR(10),
    nombre_usuario VARCHAR(18),
    contrasena VARCHAR(18) NOT NULL,
    id_perfil INT2 NOT NULL,
    fecha_registro DATE NOT NULL,
    correo_electronico VARCHAR(40) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(id) REFERENCES tbl_cliente(id),
    FOREIGN KEY(id_perfil)REFERENCES tbl_perfil(id)
);

CREATE TABLE tbl_cliente(
	id VARCHAR(10),
    primer_nombre VARCHAR(18) NOT NULL,
    segundo_nombre VARCHAR(18),
    apellido_paterno VARCHAR(20) NOT NULL,
    apellido_materno VARCHAR(20) NOT NULL,
    edad INT2 NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    codigo_postal VARCHAR(12) NOT NULL,
    domicilio VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

/*PROCEDIMIENTOS ALMACENADOS.*/

DELIMITER //
CREATE PROCEDURE `tbl_cliente_usuario_insertar_sp` (IN IN_id_cliente VARCHAR(10),IN IN_primer_nombre VARCHAR(18), IN IN_segundo_nombre VARCHAR(18),IN IN_apellido_paterno VARCHAR(20),
IN IN_apellido_materno VARCHAR(20),IN IN_fecha_nacimiento DATE,IN IN_codigo_postal VARCHAR(12),IN IN_domicilio VARCHAR(50),IN IN_nombre_usuario VARCHAR(18),
IN IN_contrasena VARCHAR(18),IN IN_id_perfil INT2,IN IN_correo_electronico VARCHAR(40))
	BEGIN
		DECLARE IN_fecha_registro DATE;
    	START TRANSACTION;
			-- INSERTA TODOS LOS DATOS EN LA TABLA DE CLIENTES
			select CURDATE() INTO IN_fecha_registro;
            SELECT tbl_cliente FOR UPDATE;
			INSERT INTO tbl_cliente(
				id,
				primer_nombre,
				segundo_nombre,
				apellido_paterno,
				apellido_materno,
				fecha_nacimiento,
				codigo_postal,
                domicilio
                ) VALUES (
                IN_id_cliente,
                IN_primer_nombre,
                IN_segundo_nombre,
                IN_apellido_paterno,
                IN_apellido_materno,
                IN_fecha_nacimiento,
                IN_codigo_postal,
                IN_domicilio);
			-- INSERTA TODOS LOS DATOS EN LA TABLA DE USUARIOS
			INSERT INTO tbl_usuario(
				id,
				nombre_usuario,
				contrasena,
				id_perfil,
                fecha_registro,
                correo_electronico
                ) VALUES (
                IN_id_cliente,
				IN_nombre_usuario,
                IN_contrasena,
                IN_id_perfil,
                IN_fecha_registro,
                IN_correo_electronico);
		SELECT 'Los datos del cliente fueron registrados exitosamente';
		COMMIT;
    END//
DELIMITER ;

-- consultar un cliente por su id
DELIMITER //
CREATE PROCEDURE `tbl_cliente_usuario_consultar_sp` (IN IN_id_cliente VARCHAR(10)) 
	BEGIN
		SELECT 
			C.id,
            C.primer_nombre,
			C.segundo_nombre,
			C.apellido_paterno,
			C.apellido_materno,
            C.edad,
			C.fecha_nacimiento,
			C.codigo_postal,
			C.domicilio,
            P.tipo,
            U.nombre_usuario,
			U.contrasena,
			U.fecha_registro,
			U.correo_electronico
		FROM 
			tbl_cliente AS C
		INNER JOIN 
			tbl_usuario AS U
		ON
			C.id = U.id
		INNER JOIN 
			tbl_perfil AS P
		ON 
			P.id = 2
		WHERE
			C.id = IN_id_cliente;
    END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE `tbl_cliente_usuario_consultar_todo_sp` () 
	BEGIN
		SELECT 
			C.id,
            C.primer_nombre,
			C.segundo_nombre,
			C.apellido_paterno,
			C.apellido_materno,
            C.edad,
			C.fecha_nacimiento,
			C.codigo_postal,
			C.domicilio,
            P.tipo,
            U.nombre_usuario,
			U.contrasena,
			U.fecha_registro,
			U.correo_electronico
		FROM 
			tbl_cliente AS C
		INNER JOIN 
			tbl_usuario AS U
		ON
			C.id = U.id
		INNER JOIN 
			tbl_perfil AS P
		ON 
			P.id = 2;
    END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE `tbl_cliente_usuario_login_sp` (IN IN_nombre_usuario VARCHAR(18),IN IN_contrasena VARCHAR(18)) 
	BEGIN
		SELECT 
			C.id,
            C.primer_nombre,
			C.segundo_nombre,
			C.apellido_paterno,
			C.apellido_materno,
            C.edad,
			C.fecha_nacimiento,
			C.codigo_postal,
			C.domicilio,
            P.tipo,
            U.nombre_usuario,
			U.contrasena,
			U.fecha_registro,
			U.correo_electronico
		FROM 
			tbl_cliente AS C
		INNER JOIN 
			tbl_usuario AS U
		ON
			C.id = U.id
		INNER JOIN 
			tbl_perfil AS P
		ON 
			P.id = 2
		WHERE 
			(
				U.nombre_usuario = IN_nombre_usuario
				AND
				U.contrasena = IN_contrasena
            );
    END//
DELIMITER ;

CREATE TABLE tbl_cliente_prueba (
	id INTEGER AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    correo_electronico VARCHAR(40) NOT NULL,
    nombre_usuario VARCHAR(20) NOT NULL,
    contrasena VARCHAR(20),
    PRIMARY KEY (id)
);

-- PROCEDIMIENTO PARA MANEJAR TRANSACCIONES.
DELIMITER //
	CREATE DEFINER=`root`@`localhost` PROCEDURE `tbl_transferencia_cuenta_bancaria_sp`(IN IN_monto DECIMAL (7,2) ,IN IN_id_cuentaA INT2, IN IN_id_cuentaB INT2)
	BEGIN
		DECLARE saldo_actual_A DECIMAL (7,2);
        DECLARE saldo_actual_B DECIMAL (7,2);
        START TRANSACTION;
        IF( EXISTS (SELECT * FROM tbl_cuenta_bancaria WHERE id = IN_id_cuentaA) AND 
        EXISTS (SELECT * FROM tbl_cuenta_bancaria WHERE id = IN_id_cuentaB)) THEN
			SELECT saldo INTO saldo_actual_A 
            FROM tbl_cuenta_bancaria WHERE id = IN_id_cuentaA
            FOR UPDATE;
            SELECT saldo INTO saldo_actual_B
            FROM tbl_cuenta_bancaria WHERE id = IN_id_cuentaB
            FOR UPDATE;
            IF IN_monto <= saldo_actual_A THEN
				UPDATE tbl_cuenta_bancaria SET saldo = saldo_actual_A - IN_monto WHERE id = IN_id_cuentaA;
                UPDATE tbl_cuenta_bancaria SET saldo = saldo_actual_B + IN_monto WHERE id = IN_id_cuentaB;
                SELECT 'Mensage: La transaccion fue realizada exitoasamente' AS resultado;
			ELSE 
				SELECT 'Mensage: Saldo insuficiente.' AS resultado;
			END IF;
		ELSE 
			SELECT 'Mensage: Cuentas bancarias no encontradas.' AS resultado;
		END IF;
        COMMIT;
    END//
DELIMITER ;

/*OBTENER LA FECHA DEL SERVIDOR MYSQL.*/
select CURDATE();
/*OBTENER LA FECHA LOS MINUTOS Y NANOSEGUNDOS DEL SERVIDOR MYSQL.*/
 select NOW();


