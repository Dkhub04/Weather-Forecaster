import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const WEEK_DAYS = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
const Forecast = ({ data }) => {

    const day = new Date().getDay();

    const forecastday = WEEK_DAYS.slice(day ,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,day));

    return (
        <>
            <label className="title text-2xl font-bold"> Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item bg-neutral-100 rounded-2xl h-10 m-1 flex items-center cursor-pointer text-base py-1 px-5">
                                    <img alt="weather" className="icon-small w-10" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day text-slate-800  flex-1 font-semibold ml-4"> {forecastday[idx]}</label>
                                    <label className="Description  flex-1 mr-4 text-right"> {item.weather[0].description}</label>
                                    <label className="min-max temp  text-stone-500"> {Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C </label>


                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <div className="daily-details-grid grid flex-1 py-1 px-4 gap-y-0 gap-x-3.75 grid-cols-auto-2">
   
                                <div className="daily-details-grid-items items-center flex h-8 justify-between">
                                    <label className="text-neutral-600">Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>

                                <div className="daily-details-grid-items items-center flex h-8 justify-between">
                                    <label className="text-neutral-600">Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>

                                <div className="daily-details-grid-items items-center flex h-8 justify-between">
                                    <label className="text-neutral-600">Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>

                                <div className="daily-details-grid-items items-center flex h-8 justify-between">
                                    <label className="text-neutral-600">Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>

                                <div className="daily-details-grid-items items-center flex h-8 justify-between">
                                    <label className="text-neutral-600">Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>

                                <div className="daily-details-grid-items items-center flex h-8 justify-between">
                                    <label className="text-neutral-600">Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)} °C</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>


    )



}

export default Forecast     