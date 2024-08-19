import { useRef, useState } from 'react'
import axios from 'axios'
import WeatherInformations from './components/weatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/weatherInformations5Days/WeatherInformations5Days'


function App() {
  const inputRef = useRef()
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  async function serchCity() {
    const city = inputRef.current.value

    const key = "13114d8d8a50837c0d0bb5293673911f"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)

  }

  return (
    <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-white mb-4">
       Previsão do Tempo
      </h1>
      <div className="">
        <input type="text" ref={inputRef} placeholder="Digite o nome da cidade" className="px-2 py-0.5 rounded-l-3xl text-sm focus:outline-none"/>
        <button className="bg-orange-300 text-white px-3 font-bold text-sm py-0.5 rounded-r-3xl" onClick={serchCity}>Buscar</button>
      </div>

      <div className='bg-slate-100 w-full max-w-96 mt-4 rounded-md'>
        {weather && <WeatherInformations weather={weather}/>}
      </div>
      <div className=' w-full max-w-96 mt-4 rounded-md'>
        {weather5Days && <WeatherInformations5Days weather5Days={weather5Days}/>}
      </div>
    </div>
    
  )
}

export default App
