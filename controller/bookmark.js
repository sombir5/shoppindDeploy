const Bookmark = require("../modal/bookmark.modal");

const getBookmark = async (req, res) => {
    try {
        let bookmarkItem = await Bookmark.find({});
        res.send(bookmarkItem)
    } catch (error) {
        console.log(error.message); 
    }
}

const addBookmark= async (req, res) => {
  try {
    let bookmarkItem = await Bookmark.create({
      item: req.body.item,
    }).populate("store");

      return res.send(bookmarkItem);
    } catch (e) {
    res.status(500).send(e.message);
  }
}
const deleteBookmark = async (req, res) => {
  const id = req.params.id;
  try {
    let bookmarkItem = await Bookmark.findByIdAndDelete(id);
    res.send({ message: "Delete item" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { getBookmark, addBookmark, deleteBookmark };