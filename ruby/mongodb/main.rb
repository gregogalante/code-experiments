# Code examples to play with a mongo database.

# Require official mongodb gem: https://github.com/mongodb/mongo-ruby-driver

require 'mongo'

# Set database data:

DATABASE_CONNECTION = 'mongodb://1.1.1.1:1'
DATABASE_NAME = 'dbname'

# Update log level to mongo (to not show log):

Mongo::Logger.logger.level = ::Logger::FATAL

# Create client object:

client = Mongo::Client.new(DATABASE_CONNECTION, database: DATABASE_NAME)

# List all collections:

collections = client.collections
collections.each do |collection|
  puts "collection pretty printed: #{collection.inspect}"
  puts "collection name: #{collection.name}"
  puts "collection number of documents: #{collection.count}"
  puts "collection options: #{collection.options}"
end

# Select a single collection to work with:

collection = collections.sample

# Read a find view from a collection:

collection_view = collection.find
collection_view.map { |row| puts row.inspect }
