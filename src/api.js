// BASE URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`

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
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`
// TODO:
//GAME DETAILS
export const gameDetailsURL = game_id => `${base_url}games/${game_id}`
//Game ScreenShots
export const gameScreenshotURL = game_id =>
  `${base_url}games/${game_id}/screenshots`
//Searched game
export const searchGameURL = game_name =>
  `${base_url}games?search=${game_name}&page_size=9`
