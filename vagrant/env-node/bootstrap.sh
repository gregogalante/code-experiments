sudo apt-get update
sudo apt-get install -y git

# Install node

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install mongodb

sudo apt-get install -y mongodb  

# Install yarn for better dependencies management

npm install -g yarn
