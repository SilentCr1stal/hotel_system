import { Schema, model, models } from 'mongoose'

const hotelSchema = new Schema({
  label: String,
  id: String,
  rating: Number,
  locationName: String,
  fullName: String,
  stars: Number,
  priceFrom: Number,
  hasWifi: Boolean
})

const Hotel = models.Hotel || model('Hotel', hotelSchema)

export default Hotel
