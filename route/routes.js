const express = require("express");
const {addList,allItem, itemId, deleteItem} =require("../controller/add.list");
const {
  getBookmark,
  deleteBookmark,
  addBookmark,
} = require("../controller/bookmark");
const router = express.Router();

router.post("/addItem", addList)
router.get("/allItem", allItem)
router.get("/allItem/:id", itemId)
router.delete("/deleteItem/:id", deleteItem)

router.get("/getBookmark",getBookmark)
router.post("/addBookmark",addBookmark)
router.delete("/deletetBookmark",deleteBookmark)
module.exports=router