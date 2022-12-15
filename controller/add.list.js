const ItemList = require("../modal/store.modal");
const addList = async (req, res) => {
  try {
    let item = await ItemList.create(req.body);
    item.save();
    res.send({ item, message: "item Added" });
  } catch (error) {
    console.log(error.message);
  }
};
const allItem = async (req, res) => {
  try {
    let items = await ItemList.find({});
    res.send({ items, message: "All items" });
  } catch (error) {
    console.log(error.message);
  }
};

const itemId = async (req, res) => {
  const id = req.params.id;
  try {
    let item = await ItemList.findOne({ _id: id }).populate("hero");
    console.log(item);
    return res.send({ item });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    let item = await ItemList.findByIdAndDelete(id);
    res.send({ message: "Delete item" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { addList, allItem, itemId, deleteItem };