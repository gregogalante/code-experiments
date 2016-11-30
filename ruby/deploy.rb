require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
# require 'mina/rbenv'
require 'mina/rvm'

# DATI BASE
set :rails_env, 'staging'
set :term_mode, :system
set :execution_mode, :system

# CONDIVISIONE DATI TRA RELEASE
set :shared_paths, ['db/production.sqlite3', 'public/system']

# DATI PER IL DEPLOY DA REPOSITORY
set :domain,     '80.255.6.110'
set :deploy_to,  "/home/deploy/applications/application"
set :repository, 'https://application.git'
set :branch,     'master'

# DATI PER L'ACCESSO ALLA REPOSITORY TRAMITE SSH
set :user, 'deploy'
set :port, '22'
set :ssh_options, '-A'
set :forward_agent, true

# TASK ENVIRONMENT
task :environment do
  # invoke :'rbenv:load'
  invoke :'rvm:use', 'ruby-2.3.1'
end

# TASK DEPLOY
task :deploy => :environment do

  deploy do
    # Lista comdandi da eseguire al deploy
    invoke :'git:clone'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'rails:assets_precompile'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'
  end
end
