#!/bin/sh
echo "Start update"
scp -r ./* srv:/var/www/gift-for-all.ru
echo "Update complete"
