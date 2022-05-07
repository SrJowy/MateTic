# APLICACIÓN WEB MATETIC

## Información general

Este proyecto ha sido diseñado para la asignatura Gestión de Proyectos de tercer curso de Informática de Gestión y Sistemas de Información de la UPV/EHU.

## Instalación

Para instalar el proyecto existe un archivo .sh con diferentes opciones:

- **Instalar Node JS:** instala la versión 16.14.2 LTS de Node JS.
- **Instalar docker-compose:** instala docker compose con apt para crear un contenedor de MySQL y PHPMyAdmin.
- **Instalar el sistema:** instala el servidor y el cliente, instala los paquetes necesarios con npm e introduce la BBDD a MySQL.

*Nota:* La aplicación ha sido desarrollada y testeada en Ubuntu 20.04, puede que no funcione en otras versiones.

## Puesta en marcha

Para correr la aplicación web será necesario abrir dos terminales y ejecutar *install.sh* en las dos.
En una se ejecutará la opción *Iniciar el servidor* y en la otra, *Iniciar el cliente*

El servidor correrá en el puerto 5000 del ordenador, mientras que el cliente lo hará en el puerto 3000.

Una vez arrancado el cliente, se abrirá automáticamente la aplicación en el navegador por defecto.

La cuenta para realizar las pruebas pertienentes será *admin@admin.com* (Usuario) y *admin* (contraseña).

## Detención del sistema

Para detener el sistema, pulsar CTRL + C en cada una de las consolas que están corriendo el cliente y el servidor.
Para detener y eliminar la base de datos utilizar la opción *Detener la base de datos* de *install.sh*.
