#!/bin/bash
Wait () {
  clear
  sec=5
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
read choice

case $choice in

  0)
    docker rm -f Database > /dev/null 2>&1
    docker volume rm database > /dev/null 2>&1
    docker-compose build --force-rm --no-cache
    docker-compose up -d
    if [ $? -ne 0 ]; then
      echo "Could not init, Check log above."
      exit
    fi
    echo "Running!"
    ;;

  1)
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ;;

esac