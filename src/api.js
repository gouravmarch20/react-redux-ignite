// BASE URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`
// https://api.rawg.io/api/games?key=b9bfceafa7344e549c3016819880afaf&dates=2020-11-05,2021-11-05&ordering=-rating&page_size=10
// https://api.rawg.io/api/games?key=b9bfceafa7344e549c3016819880afaf
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

// POPULAR GAMES
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;



console.log(`${base_url}${newGames} `)

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
