var Shop = require('../src/gilded_rose')

describe ("Shop Class", function () {
  var gildedRose = new Shop()
  beforeEach(function () {

    gildedRose.items.push({ name: 'Aged Brie', sellIn: 2, quality: 0 })
    gildedRose.items.push({ name: 'Elixir of the Mongoose', sellIn: 5, quality: 7 })
    gildedRose.items.push({ name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 })
    gildedRose.items.push({ name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 })
    gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 20 })
    gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 49 })
    gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 49 })
    // this conjured item does not work properly yet
    gildedRose.items.push({ name: 'Conjured Mana Cake', sellIn: 3, quality: 6 })
  })
  describe ('Normal Items', function () {
    it("should decrease the #sellIn and #quality of a normal item by 1", function () {
      gildedRose.items.push({ name: '+5 Dexterity Vest', sellIn: 10, quality: 20 })
      let items = gildedRose.items
      expect(items[0].sellIn).toEqual(9)
    })
  })

})
