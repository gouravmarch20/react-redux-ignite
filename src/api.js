// BASE URL
const base_url = `https://api.rawg.io/api/`
// getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
// getting the date
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}
// getting the year
const getCurrentYear = () => {
  return new Date().getFullYear()
}
// getting
const currentDay = getCurrentDay()
const currentMonth = getCurrentMonth()
const currentYear = getCurrentYear()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// ---> test
// console.log(currentDay)
// console.log(currentMonth)
// console.log(currentYear)
// console.log(currentDate)
// console.log(lastYear)
// console.log(nextYear)

// POPULAR GAMES
// const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
// export const popularGamesURL = () => `${base_url}${popular_games}`
