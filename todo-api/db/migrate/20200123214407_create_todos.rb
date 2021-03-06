class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :done, default:false
      t.string :date

      t.timestamps
    end
  end
end
