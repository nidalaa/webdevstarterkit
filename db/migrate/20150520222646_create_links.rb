class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.references :step
      t.string :title
      t.string :description
      t.string :url

      t.timestamps null: false
    end
  end
end
