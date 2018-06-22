function backStagePasses (item) {
  const TIME_TO_CONCERT_FIRST_DEADLINE = 10
  const TIME_TO_CONCERT_SECOND_DEADLINE = 5
  const CONCERT_DATE = 0
  item.sellIn --
  if (item.sellIn < CONCERT_DATE) {
    item.quality = 0
  } else if (item.quality < 50) {
    if (item.sellIn > CONCERT_DATE) {
      item.quality ++
    }
    if (item.sellIn <= TIME_TO_CONCERT_FIRST_DEADLINE) {
      item.quality ++
    }
    if (item.sellIn <= TIME_TO_CONCERT_SECOND_DEADLINE) {
      item.quality ++
    }
  }
}

module.exports = backStagePasses