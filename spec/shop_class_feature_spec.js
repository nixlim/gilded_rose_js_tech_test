var Shop = require('../src/shop_class')
var Item = require('../src/item_class')

describe ("Shop Class", function () {
  var gildedRose = new Shop()
  describe ('Normal Items', function () {
    describe ('Normal Items - unexpired', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: '+5 Dexterity Vest', sellIn: 10, quality: 20 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it("should decrease the #sellIn on updateQuality", function () {
        expect(gildedRose.items[0].sellIn).toEqual(9)
      })
      it('should decrease the #quality of a normal item by 1', function () {
        expect(gildedRose.items[0].quality).toEqual(19)
      })
    })
    describe ('Normal Items - expired', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: '+5 Dexterity Vest', sellIn: 0, quality: 20 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it("should decrease the #sellIn on updateQuality", function () {
        expect(gildedRose.items[0].sellIn).toEqual(-1)
      })
      it('should decrease the #quality of a normal item by 1', function () {
        expect(gildedRose.items[0].quality).toEqual(18)
      })
    })
  })
  describe ('Aged Brie', function () {
    describe ('Aged Brie - unexpired', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Aged Brie', sellIn: 2, quality: 0 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should decrease the #sellIn on updateQuality', function () {
        expect(gildedRose.items[0].sellIn).toEqual(1)
      })
      it('should increase the #quality on updateQuality', function () {
        expect(gildedRose.items[0].quality).toEqual(1)
      })
    })
    describe ('Aged Brie - expired', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Aged Brie', sellIn: 0, quality: 0 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should decrease the #sellIn on updateQuality', function () {
        expect(gildedRose.items[0].sellIn).toEqual(-1)
      })
      it('should increase the #quality twice as fast on updateQuality', function () {
        expect(gildedRose.items[0].quality).toEqual(2)
      })
    })
  })
  describe ('Quality Edge Cases', function () {
    beforeEach(function () {
      gildedRose.items = []
    })
    afterEach(function () {
      gildedRose.items = []
    })
    it('should never increase the #quality of an item above 50', function () {
      gildedRose.items.push({ name: 'Aged Brie', sellIn: 1, quality: 50 })
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(50)
    })
    it('should never decrease the #quality of a normal item below 0', function () {
      gildedRose.items.push({ name: '+5 Dexterity Vest', sellIn: 10, quality: 0 })
      gildedRose.items.push({ name: '+5 Dexterity Vest', sellIn: 0, quality: 0 })
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(0)
      expect(gildedRose.items[1].quality).toEqual(0)
    })
    it('should never decrease the #quality of a conjured item below 0', function () {
      gildedRose.items.push({ name: 'Conjured Hat of Dough', sellIn: 10, quality: 0 })
      gildedRose.items.push({ name: 'Conjured Hat of Dough', sellIn: 0, quality: 0 })
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(0)
      expect(gildedRose.items[1].quality).toEqual(0)
    })
  })
  describe('Sulfuras, Hand of Ragnaros', function () {
    describe ('Sulfuras, Hand of Ragnaros - unexpired', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Sulfuras, Hand of Ragnaros', sellIn: 1, quality: 80 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should not change either the #sellIn or the #quality', function () {
        expect(gildedRose.items[0].sellIn).toEqual(1)
        expect(gildedRose.items[0].quality).toEqual(80)
      })
    })
    describe ('Sulfuras, Hand of Ragnaros - expired', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 80 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should not change either the #sellIn or the #quality', function () {
        expect(gildedRose.items[0].sellIn).toEqual(-1)
        expect(gildedRose.items[0].quality).toEqual(80)
      })
    })
  })
  describe('Backstage passes', function () {
    describe('Backstage passes with more than 10 days to expiry', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 15, quality: 20 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should reduce the #sellIn value by 1', function () {
        expect(gildedRose.items[0].sellIn).toEqual(14)
      })
      it('should increase the #quality value by 1', function () {
        expect(gildedRose.items[0].quality).toEqual(21)
      })
      it('should not increase the #quality above 50', function () {
        gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 50 })
        gildedRose.updateQuality()
        expect(gildedRose.items[1].quality).toEqual(50)
      });
    })
    describe('Backstage passes with more than 5 days but less than 11 days to expiry', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 20 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should reduce the #sellIn value by 1', function () {
        expect(gildedRose.items[0].sellIn).toEqual(9)
      })
      it('should increase the #quality value by 2', function () {
        expect(gildedRose.items[0].quality).toEqual(22)
      })
    })
    describe('Backstage passes with more than 0 days but less than 6 days to expiry', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 20 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should reduce the #sellIn value by 1', function () {
        expect(gildedRose.items[0].sellIn).toEqual(4)
      })
      it('should increase the #quality value by 3', function () {
        expect(gildedRose.items[0].quality).toEqual(23)
      })
    })
    describe('Backstage passes after the concert', function () {
      beforeEach(function () {
        gildedRose.items.push({ name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 20 })
        gildedRose.updateQuality()
      })
      afterEach(function () {
        gildedRose.items = []
      })
      it('should reduce the #sellIn value by 1', function () {
        expect(gildedRose.items[0].sellIn).toEqual(-1)
      })
      it('should decrease the #quality value to 0', function () {
        expect(gildedRose.items[0].quality).toEqual(0)
      })
    })
  })
  describe('conjured items', function () {
    beforeEach(function () {
      gildedRose.items.push({ name: 'Conjured Mana Cake', sellIn: 3, quality: 6 })
      gildedRose.items.push({ name: 'Conjured Mana Cake', sellIn: 0, quality: 6 })
      gildedRose.items.push({ name: 'Conjured Mana Cake', sellIn: 0, quality: 3 })
      gildedRose.updateQuality()
    })
    afterEach(function () {
      gildedRose.items = []
    })
    it('should decrease unexpired conjured item quality by 2', function () {
      expect(gildedRose.items[0].quality).toEqual(4)
    })
    it('should decrease expired item quality by 4', function () {
      expect(gildedRose.items[1].quality).toEqual(2)
    })
    it('should decrease expired item quality to 0 if it is 3 on expiration', function () {
      expect(gildedRose.items[2].quality).toEqual(0)
    })
  })
})