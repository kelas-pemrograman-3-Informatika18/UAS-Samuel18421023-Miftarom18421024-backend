const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MobilSchema = new Schema({
  merekMobil: {
    type: String
  },
  harga: {
    type: Number
  },
  tahun: {
    type: String,
    default: '2020'
  },
  warna: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  deskripsi: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('mobil', MobilSchema)