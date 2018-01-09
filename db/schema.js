const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HomesSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: false },
    color: { type: String, required: false },
    hasGarage: { type: Boolean, required: false },
    hasBigFrontYard: { type: Boolean, required: false },
    purchased: { type: Boolean, required: false }
  },
  {
    timestamps: {},
    usePushEach: true
  }
)

const LandsSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: false },
    purchased: { type: Boolean, required: false },
    homes: [HomesSchema]
  },
  {
    timestamps: {},
    usePushEach: true
  }
)

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    favColor: { type: String, required: false },
    landLots: [LandsSchema]
    },
  {
    timestamps: {},
    usePushEach: true
  }
)

module.exports = {
  HomesSchema,
  LandsSchema,
  UserSchema
}