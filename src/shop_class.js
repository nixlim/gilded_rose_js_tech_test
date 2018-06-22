var agedBrie = require('./agedBrie_class')
var backStagePasses = require('./backStagePasses_class')
var normalGoods = require('./normalGoods_class')
var Item = require('../src/item_class')

class Shop {
  constructor (items = []) {
    this.items = items
  }
  updateQuality () {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') {
        agedBrie(this.items[i])
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        backStagePasses(this.items[i])
      } else if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
        normalGoods(this.items[i])
      }
    }
    return this.items
  }
}

module.exports = Shop