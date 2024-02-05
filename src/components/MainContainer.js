import HourlyForecast from './HourlyForecast';
import Weather from './Weather';

const MainContainer = () => {
  return (
    <div className='bg-orange-500 w-192 px-10 text-white'>
        <Weather/>
        <HourlyForecast/>


        <div>
            <h1 className='p-2'>Daily Forecast</h1>
            <div>
                <div className='w-24 h-36 border border-white'>
                </div>

            </div>
        </div>

            
    </div>
  )
}

export default MainContainer