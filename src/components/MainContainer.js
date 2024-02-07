import HourlyForecast from './HourlyForecast';
import Weather from './Weather';

const MainContainer = () => {
  return (
    <div className='w-[48rem] px-4 text-white'>
        <Weather/>
        <HourlyForecast/>
    </div>
  )
}

export default MainContainer