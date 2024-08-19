import React from 'react'

function WeatherInformations({ weather }) {


  return (
    <div className='flex flex-col justify-center items-center py-3'>
      <h2 className='font-bold'>{weather.name}</h2>
      <div className='flex justify-center items-center'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="imagem da Cidade" />

      <p className='font-bold text-lg'>{Math.round(weather.main.temp)}ºC</p>
      </div>
      <p className='font-semibold uppercase text-xs'>{weather.weather[0].description}</p>
      <div className='flex gap-6 mt-3'>
        <p className='text-xs font-semibold'>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
        <p className='text-xs font-semibold'>Umidade: {Math.round(weather.main.humidity)}%</p>
        <p className='text-xs font-semibold'>Pressão: {Math.round(weather.main.pressure)}</p>
      </div>
    </div>
  )
}

export default WeatherInformations
