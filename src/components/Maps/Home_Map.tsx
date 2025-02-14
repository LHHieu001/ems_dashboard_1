import React from "react";
import GoogleMapReact from 'google-map-react';
import { IoIosWarning } from "react-icons/io";
import { IoPieChartSharp } from "react-icons/io5";


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
        <div className='flex flex-col h-full'>

            <div className='flex items-center gap-x-3'>
                <IoPieChartSharp className='text-white bg-green-500 text-2xl h-fit w-fit p-1 rounded-full'/>
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