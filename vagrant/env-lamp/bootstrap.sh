sudo apt-get update
sudo apt-get install -y git

# Install ruby-sass

echo install ruby-sass
sudo apt-get install -y ruby-sass

# Install phpmyadmin

cd /var/www/public && composer create-project phpmyadmin/phpmyadmin --repository-url=https://www.phpmyadmin.net/packages.json --no-dev
