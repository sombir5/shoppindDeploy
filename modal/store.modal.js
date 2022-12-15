const mongoose = require("mongoose");
const moment = require("moment");
const storeSchema = new mongoose.Schema(
  {
    title: { type: String,unique:true, required: true },
    quantity: { type: Number, required: true },
    priority: { type: Number, required: true },
    description: { type: String, required: true },
    date: {
      type: String,
      default:
        moment().format("YYYY/MM/DD") + "/" + moment().format("hh:mm:ss"),
    },
  },
  { timestamps: true }
);

const store = mongoose.model("store", storeSchema);
module.exports = store;
