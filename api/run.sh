#!/bin/bash
Welcome () {
  echo "*%* Jugspeed CONTROL PANEL *%*"
  echo " 0 - Initialize"
  echo " 1 - Migrate & Run"
  exit
}

Wait () {
  sec=4
  while [ $sec -ne 0 ]; do
    echo "Wait for CMS to start in $sec second..."
    sleep 1
    ((sec=sec-1))
  done
}

clear
echo "*%* CONTROL PANEL *%*"
echo " 0 - Initialize"
echo " 1 - Run"
echo -n "Select commands by their numbers:"
#read choice
clear
case $1 in

  0)
    docker-compose down -v -t 0
    docker-compose build --force-rm --no-cache
    docker-compose up -d
    if [ $? -ne 0 ]; then
      echo "Could not init, Check log above."
      exit
    fi
    Wait
    echo "database system is ready to accept connections!"
    ;;

  1)
    rm -rf api/migrations
    ./manage.py makemigrations account blog shop payment
    ./manage.py migrate
    ./manage.py loaddata fixture1.json
    ./manage.py loaddata category.json
    ./manage.py loaddata article.json
    ./manage.py runserver
    ;;

  *)
    Welcome

esac