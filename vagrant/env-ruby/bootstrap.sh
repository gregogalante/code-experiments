sudo apt-get update
sudo apt-get install -y git

# Install ruby

sudo apt-get install -y libssl-dev libreadline-dev zlib1g-dev
git clone https://github.com/rbenv/ruby-build.git /tmp/ruby-build && \
cd /tmp/ruby-build && \
PREFIX=/usr/local ./install.sh && \
/usr/local/bin/ruby-build 2.3.1 /usr && \
cd && \
rm -rf /tmp/ruby-build && \

# Install bundler

sudo gem install bundler

# Install rails

sudo gem install rails

# Install other dependencies

sudo apt-get install -y libmysqlclient-dev
sudo apt-get install -y libsqlite3-dev
sudo apt-get install -y nodejs
