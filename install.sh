#!/bin/bash

function nodeInstall() {
    aux=$(node -v | grep "127")

    if [ -z "aux" ]
    then
        echo "Se va a proceder a instalar Node JS en su versión 16.14.2 LTS"
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
        source ~/.bashrc
        nvm install v16.14.2
    else
        echo "Ya está instalado Node JS"
    fi
}

function dockerComposeInstall() {
    which docker-compose

    if [ $? != 0 ]
    then
        echo "Instalando docker-compose..."
        sudo apt install docker-compose
    else
        echo "Ya está instalado docker-compose"
    fi

}

function systemInstall() {
    cd client
    npm install
    cd ..
    cd server
    npm install
    cd ..
}

function startBackend() {
    cd db
    sudo docker-compose up -d
    docker exec -i dev_mysql  mysql -uroot -ppassword  < mysql.sql
    cd ..
    cd server
    npm start
    cd ..
}

function startFrontend() {
    cd client
    npm start
}

function fin() {
    echo -e "¿Quieres salir del programa?(S/N)\n"
    read respuesta
	if [ $respuesta == "N" ] 
		then
			op=0
		fi	
}

op=0
while test $op -ne 6
do
    echo -e "Se debe abrir otra terminal con la ejecución del programa para iniciar el cliente \n"
    echo -e "1) Instalar Node JS \n"
    echo -e "2) Instalar docker-compose \n"
    echo -e "3) Instalar el sistema \n"
    echo -e "4) Iniciar el servidor \n"
    echo -e "5) Iniciar el cliente \n"
    echo -e "6) Salir del programa \n"
    read -p "Elige una opción:" op
    case $op in
        1) nodeInstall;;
        2) dockerComposeInstall;;
        3) systemInstall;;
        4) startBackend;;
        5) startFrontend;;
        6) fin;;
        *) ;;
    esac
done

echo "Fin del programa"
exit 0