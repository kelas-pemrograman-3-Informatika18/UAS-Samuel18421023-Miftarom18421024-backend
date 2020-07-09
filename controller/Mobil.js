const mobilModel = require('../model/Mobil')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')
exports.insertMobil = (data) =>
  new Promise((resolve, reject) => {
    mobilModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input Data Mobil')))
    .catch(() => reject(requestResponse.serverError))
  })

exports.getAllMobil = () =>
  new Promise((resolve, reject) => {
    mobilModel.find({})
      .then(mobil => resolve(requestResponse.suksesWithData(mobil)))
      .catch(error => reject(requestResponse.serverError))
  })

exports.getbyId = (id) =>
  new Promise((resolve, reject) => {
    mobilModel.findOne({
      _id: objectId(id)
    }).then(mobil => resolve(requestResponse.suksesWithData(mobil)))
    .catch(error => reject(requestResponse.serverError))
  })

exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    mobilModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Data Mobil'))
      }).catch(() => reject(requestResponse.serverError))
  })

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    mobilModel.findOne({
      _id: objectId(id)
    }).then((mobil) => {
      mobilModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(mobil.image)
        resolve(requestResponse.sukses('Berhasil menghapus Mobil'))
      }).catch(() => reject(requestResponse.serverError))
    })
  })