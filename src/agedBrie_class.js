function agedBrie (item) {
  item.sellIn --
  if (item.quality < 50) {
    item.quality ++
    if (item.sellIn < 0) {
      item.quality ++
    }
  }
}

module.exports = agedBrie
