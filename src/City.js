import React from 'react'

function City({ city }) {

    
    return (
        <div>
            {city &&
                <div>
                    <h1 className='text-5xl font-bold mt-10 mb-3 italic'>{city.sys.country}</h1>
                    <h1 className='text-2xl italic bg-stone-400 inline px-3 py-1 rounded-2xl text-white'>{city.name}</h1>
                    <div className='flex justify-center gap-x-24 my-12 font-normal text-3xl'>
                        <h1 className='text-4xl font-bold'>{city.main.temp} C°</h1>
                        <h1 >Humidity: {city.main.humidity}</h1>
                    </div>

                    <h1 className='text-2xl font-bold mb-2'>{city.weather[0].main}</h1>
                    <img className='mx-auto' alt='photos coming from API' style={{
                        color: "red",
                        backgroundColor: "rgba(120, 121, 120, 1)",
                        borderRadius: "20px"
                    }} src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
                    <h1 className='italic mt-2 text-lg'>{city.weather[0].description}</h1>

                </div>

            }


        </div>
    )
}

export default City;