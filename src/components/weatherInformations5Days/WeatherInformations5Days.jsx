import React from 'react'


function WeatherInformations5Days({ weather5Days }) {

  console.log(weather5Days)
  let dailyForecast = {}

  for(let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    if(!dailyForecast[date]) {
      dailyForecast[date] = forecast
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1,6)

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: '2-digit'})
  
   return newDate
  }

  return (
    <div className='bg-slate-100 px-2 rounded-md pt-2'>
      <h2 className='font-bold  text-center'>Previsão dos Próximos 5 dias</h2>
    <div className='flex justify-center text-xs items-center py-3 space-x-3'>
      {next5DaysForecast.map(forecast => (
      
        <div key={forecast.dt} className='flex flex-col bg-gray-400 p-1 justify-center items-center rounded-md'>
            <p className='text-[9px] text-center'>{convertDate(forecast)}</p>
            <div className='block max-w-max'>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
            </div>
            <p className='text-[7px] text-center'>{forecast.weather[0].description}</p>
            <p className='text-[5px] text-center'>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
        </div>
      
      ))}
    </div>
    </div>
  )
}

export default WeatherInformations5Days
