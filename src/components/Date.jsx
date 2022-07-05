import React, { Component, Fragment } from 'react';
import EventCard from './parts/EventCard';
class WedDate extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='bg-slate-800'>
                    <div className="w-9/12 container mx-auto h-screen">
                        <div className="text-center header-text text-amber-300 text-5xl mb-12 mt-12">Events</div>
                        <div className="columns-1 md:columns-2">
                            <div className='border-amber-300 rounded-lg border p-3'>
                                <EventCard 
                                    event="Akad Nikah &amp; Resepsi"
                                    date="Minggu, 11 September 2022"
                                    time="09.00 - Selesai"
                                    place1="Kediaman Mempelai Wanita"
                                    place2="Desa Gunungsari, Kec. Bonegunu, Kab. Buton Utara, Sulawesi Tenggara"
                                />
                            </div>
                            <div className='border-amber-300 rounded-lg border p-3'>
                                <EventCard 
                                    event="Syukuran"
                                    date="Minggu, 25 September 2022"
                                    time="10.00 - Selesai"
                                    place1="Kediaman Mempelai Pria"
                                    place2="Jalan Sunan Kalijaga Gg IV 4A RT 03/ RW 02 Kel. Berkoh, Purwokerto Selatan, Kab. Banyumas, Jawa Tengah"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default WedDate;