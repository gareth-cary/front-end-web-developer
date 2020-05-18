class CreateWebsites < ActiveRecord::Migration[6.0]
  def change
    create_table :websites do |t|
      t.string :name
      t.string :title
      t.string :image
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end
