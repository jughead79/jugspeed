#!/bin/bash
Wait () {
  clear
  sec=4
  while [ $sec -ne 0 ]; do
    echo "Wait for CMS to start in $sec second..."
    sleep 1
    clear
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
    docker-compose down
    docker volume rm api_database_vol
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
    python manage.py makemigrations account blog shop payment
    python manage.py migrate
    python manage.py loaddata fixture1.json
    python manage.py loaddata category.json
    python manage.py loaddata article.json
    python manage.py runserver
    ;;

esac