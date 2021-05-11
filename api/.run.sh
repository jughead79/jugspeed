#!/bin/sh
sleep 5
python manage.py makemigrations account blog shop payment
python manage.py migrate
python manage.py loaddata fixture1.json
python manage.py loaddata category.json
python manage.py loaddata article.json
python manage.py collectstatic --noinput
gunicorn --reload --bind unix:./socket/jugspeed.sock api.wsgi:application
