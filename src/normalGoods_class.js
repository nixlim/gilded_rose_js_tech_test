function normalGoods (item) {
  item.sellIn --
  if (item.quality > 0) {
    item.quality --
    if (item.sellIn < 0) {
      item.quality --
    }
  }
}

module.exports = normalGoods