#!/bin/sh
echo "Start update"
scp -r ./* srv:/var/www/gift-for-all.uninstall-game.ru;
echo "Update complete"
