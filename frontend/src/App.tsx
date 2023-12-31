import React, { useState } from 'react'
import DateAndTimeSelector from './components/datetime/datetime'
import TrafficDisplay from './components/traffic/traffic'
import { Dayjs } from 'dayjs'
import ContainedButtons from './shared/button'
import { fetchTrafficUrl, fetchWeather } from './api/datafetcher'
import LocationSelector from './components/location/location'
import WeatherInfoProps from './components/weather/weather'
import { TrafficDto, WeatherDto } from './dto'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import './styles/app.css'

function App() {
  const [datetime, setDatetime] = useState<Dayjs | null>(null)
  const [location, setLocation] = useState<string>('')
  const [traffics, setTraffics] = useState<TrafficDto[]>([])
  const [weather, setWeather] = useState<WeatherDto | null | undefined>()

  const handleDatetimeChange = (newDatetime: Dayjs | null) => {
    const convertedDatetime = newDatetime || null
    setDatetime(convertedDatetime)
  }

  const chooseLocation = (data: string) => {
    setLocation(data)
  }

  const handleSearchClick = async (location: string, datetime: Dayjs | null) => {
    if (location && datetime) {
      const traffics = await fetchTrafficUrl(location, datetime)
      const weather = await fetchWeather(location, datetime)
      setTraffics(traffics)
      setWeather(weather)
    } else {
      alert('Please check if datetime and location is selected.')
    }
  }

  return (
    <Container className='App'>
      <header className='App-header'>
        <h2>Traffic and Weather App</h2>
      </header>

      <Container>
        <Container className='component-border outer-component'>
          <Grid className='top-component-grid'>
            <Grid className='component-datetime'>
              <DateAndTimeSelector datetime={datetime} onDatetimeChange={handleDatetimeChange}></DateAndTimeSelector>
            </Grid>

            <Grid className='component-loc'>
              <LocationSelector onChange={chooseLocation}></LocationSelector>
            </Grid>
          </Grid>

          <Container className='button'>
            <ContainedButtons onClick={() => handleSearchClick(location, datetime)}></ContainedButtons>
          </Container>
        </Container>

        <Grid className='bottom-component-grid'>
          <Grid className='component component-border'>
            <WeatherInfoProps weather={weather}></WeatherInfoProps>
          </Grid>

          <Grid className='component component-border'>
            <TrafficDisplay traffics={traffics}></TrafficDisplay>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default App
