const mongoose = require("mongoose");
const moment = require("moment");
const bookmarkSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
      required: true,
    },
    date: {
      type: String,
      default:
        moment().format("YYYY/MM/DD") + "/" + moment().format("hh:mm:ss"),
    },
  },
  { timestamps: true }
);

const bookmark = mongoose.model("bookmark", bookmarkSchema);
module.exports = bookmark;
