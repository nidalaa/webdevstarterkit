class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :url_id
      t.string :next_url
      t.string :title
      t.string :subtitle
      t.string :description
      t.string :diagram

      t.timestamps null: false
    end
  end
end
