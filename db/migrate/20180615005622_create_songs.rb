class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :artist
      t.string :title
      t.float :duration

      t.timestamps
    end
  end
end
