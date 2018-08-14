# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_14_200638) do

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.integer "sherry_id"
  end

  create_table "sherries", force: :cascade do |t|
    t.integer "lcbo_id"
    t.text "name"
    t.float "price"
    t.text "origin"
    t.text "package"
    t.text "sugar_content"
    t.text "producer"
    t.text "tasting_note"
    t.text "image_url"
    t.text "thumbnail_url"
  end

end
