#!/bin/bash
Welcome () {
  echo "*%* Jugspeed CONTROL PANEL *%*"
  echo " 0 - initialize Api & build App"
  echo "   Options: [ debug | dev ]"
  echo " 1 - rebuild api"
  echo " 2 - backup"
  echo " 3 - restore"
  exit
}

CheckEnv () {
  # check env file existance
  if [ -f .env ]
  then
    # set default
    DEBUG_MODE=False
    DEV_MODE=False
    if [ "$1" == "dev" ]
    then
      DEV_MODE=True
      DEBUG_MODE=True
    elif [ "$1" == "debug" ]
    then
      DEBUG_MODE=True
    fi
    # update .env file
    sed -i "s/DEBUG_MODE=False/DEBUG_MODE=$DEBUG_MODE/" .env
    sed -i "s/DEBUG_MODE=True/DEBUG_MODE=$DEBUG_MODE/" .env
    # export all variables
    export $(grep -v '^#' .env | xargs -0)
    echo "environment file is OK."
  else
    echo "environment file DOES NOT FOUND."
    exit
  fi
}

case $1 in
  0)
    CheckEnv $2

    printf "THIS ACTION WILL REMOVE DATABASE! Do you have backups? [yes]:"
    read confirm
    if [ $confirm != yes ]
    then
      echo "Operation aborted."
      exit
    fi

    docker-compose -f api/docker-compose.yml down -v -t 0

    if [ $DEBUG_MODE == True ]
    then
      docker-compose -f api/docker-compose.yml build
    else
      docker-compose -f api/docker-compose.yml build --force-rm --no-cache
    fi
    docker-compose -f api/docker-compose.yml up -d
    if [ $? -ne 0 ]
    then
      echo "Could not init Jugspeed Api, Check log above."
      exit
    fi

    if [ $DEV_MODE == True ]
    then      
      printf "\nJugspeed Api is Running!"
    else
      npm --prefix client/ install
      npm --prefix client/ run build
      docker cp client/build/. Nginx:/var/www/html/jugspeed/
    fi
    ;;

  1)
    docker container restart -t 0 jugspeed_Api
    if [ $? -ne 0 ]
    then
      echo "Could not rebuild Api, Check log above."
      exit
    fi
    echo "Api successfully rebuilt."
    ;;

  *)
    Welcome
    ;;

esac