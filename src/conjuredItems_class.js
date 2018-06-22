function conjuredItems (item) {
  item.sellIn --
  if (item.quality >= 2) {
    item.quality -= 2
    if (item.sellIn < 0) {
      if (item.quality >= 2) {
        item.quality -= 2
      } else {
        item.quality = 0
      }
    }
  } else {
    item.quality = 0
  }
}

module.exports = conjuredItems