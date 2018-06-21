var Item = require('../src/item_class')

describe('Item Class', function () {
    it('should create an item object', function () {
      var item = new Item
      gildedRose.items.push(new Item('Sword of Redemption', 10, 40))
      expect(gildedRose.items[0].name).toEqual('Sword of Redemption')
    });
});