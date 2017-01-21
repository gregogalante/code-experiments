# *** Mina deploy sample file ***

require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
# require 'mina/rbenv'
require 'mina/rvm'

# Base datas
set :rails_env, 'staging'
set :term_mode, :system
set :execution_mode, :system

# Shared path
set :shared_dirs, ['public/system']
set :shared_files, ['db/production.sqlite3']

# Deploy repository info
set :domain,     '80.255.6.110'
set :deploy_to,  "/home/deploy/applications/application"
set :repository, 'https://application.git'
set :branch,     'master'

# Server info
set :user, 'deploy'
set :port, '22'
set :ssh_options, '-A'
set :forward_agent, true

# Env task
task :environment do
  # invoke :'rbenv:load'
  invoke :'rvm:use', 'ruby-2.3.1'
end

# Deploy task
task :deploy => :environment do

  deploy do
    invoke :'git:clone'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'rails:assets_precompile'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'
  end
end
