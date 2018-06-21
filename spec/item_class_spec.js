var Item = require('../src/item_class')

describe('Item Class', function () {
    it('should create an item object', function () {
      var item = new Item('Sword of Redemption', 10, 40)
      expect(item.name).toEqual('Sword of Redemption')
    });
});