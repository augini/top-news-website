import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const FetchData = async (country) => {
  let changeableUrl = url;

  if(country){
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl)
    return { confirmed, recovered, deaths, lastUpdate,}
  }
  catch (error) {
    console.log(error);
  }
}

export const FetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.slice(data.length-120).map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate }))

    return modifiedData
  }
  catch {

  }
}

export const FetchCountries = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)
  }
  catch(error) {
    console.log(error);
  }
}