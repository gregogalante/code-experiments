class CreateShowtime < ActiveRecord::Migration
  def change
    create_table :showtimes do |t|
      t.integer :movie_id
      t.integer :theatre_id
      t.timestamps null: false
    end
  end
end
