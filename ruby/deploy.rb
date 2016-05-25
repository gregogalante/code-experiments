require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
# require 'mina/rbenv'
# require 'mina/rvm'

# DATI BASE
set :rails_env, 'production'
set :term_mode, :system

# CONDIVISIONE DATI TRA RELEASE
set :shared_paths, ['public/system']

# DATI PER IL DEPLOY DA REPOSITORY
set :domain,     'ip_server'
set :deploy_to,  "/home/deploy/applications/nome_app"
set :repository, 'repository_applicazione'
set :branch,     'master'

# DATI PER L'ACCESSO ALLA REPOSITORY TRAMITE SSH
set :user, 'deploy'
set :port, '22'
set :ssh_options, '-A'
set :forward_agent, true

# TASK ENVIRONMENT
task :environment do
  # invoke :'rbenv:load'
  # invoke :'rvm:use[ruby-1.9.3-p125@default]'
end

# TASK DEPLOY
task :deploy => :environment do

  deploy do
    # Lista comdandi da eseguire al deploy
    invoke :'git:clone'
    invoke :'bundle:install'
    invoke :'rails:db_migrate:force'
    invoke :'rails:assets_precompile:force'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'

    to :launch do
      queue "touch #{deploy_to}/#{current_path}/tmp/restart.txt"
    end
  end
end

# SPAZIO DISPONIBILE PER ALTRI TASK O HELPER
# ------------------------------------------

# Riavvia il server
task :restart do
  queue 'sudo service nginx restart'
end


# Esegue le migrazioni in production
task :migrate do
  queue "cd #{deploy_to}/#{current_path}"
  queue 'bundle exec rake db:migrate RAILS_ENV=production'
end

# Gestione bundle
task :bundle_update do
  queue "cd #{deploy_to}/#{current_path}"
  queue 'bundle update'
end

task :bundle_install do
  queue "cd #{deploy_to}/#{current_path}"
  queue 'bundle install'
end
