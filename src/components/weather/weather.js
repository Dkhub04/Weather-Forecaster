const Weather = () => {

    return (
        <div className="weather w-80 rounded-md shadow-custom shadow-slate-300 bg-zinc-800 my-3 mx-auto  p-5 pt-0 text-cyan-100">

            <div className="top flex justify-between items-center ">
                <div>
                    <p className="city font-semibold  text-lg m-0 tracking-wide">Belgrade</p>
                    <p className="weather-Desc font-normal  text-sm m-0">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon w-28" src="icons/01d.png" ></img>
            </div>

            <div className="bottom flex justify-between items-center">
                <p className="temperature font-bold  text-7xl w-auto mx-0 my-3 tracking-tight ">18°C</p>
                <div className="details w-full pl-5">
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left font-normal text-xs "> Details</span>
                    </div>
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left font-normal text-xs"> Feels Like</span>
                        <span className="parameter-value text-right font-semibold text-xs"> 22°C</span>
                    </div>
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left font-normal text-xs"> Wind</span>
                        <span className="parameter-value text-right font-semibold text-xs"> 2m/s</span>
                    </div>
                    <div className="parameter-row flex justify-between ">
                        <span className="parameter-label text-left font-normal text-xs"> Humidity</span>
                        <span className="parameter-value text-right font-semibold text-xs"> 15%</span>
                    </div>
                    <div className="parameter-row flex justify-between">
                        <span className="parameter-label text-left font-normal text-xs"> Pressure</span>
                        <span className="parameter-value text-right font-semibold text-xs"> 10hPa </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
