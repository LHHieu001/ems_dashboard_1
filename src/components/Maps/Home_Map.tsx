import React from "react";
import GoogleMapReact from 'google-map-react';
import { IoIosWarning } from "react-icons/io";


const Home_Map = () => {

    const defaultProps = {
        center: {
          lat: 10.8231,
          lng: 106.6297
        },
        zoom: 11
      };
    
      const handleApiLoaded = (map : any, maps : any) => {
      };
    
      return(
        <div className='flex flex-col p-3 h-full'>

            <div className='flex items-center gap-x-3'>
                <IoIosWarning className='text-white bg-green-500 text-4xl p-1 rounded-full'/>
                <p className='text-lg font-bold'>Bảng đồ vị trí 7 phân hệ</p>
            </div>

            <div className="mt-3 h-full">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                </GoogleMapReact>
            </div>
            
        </div>
        
      )
}

export default Home_Map