import React, { Component, Fragment } from 'react';
import EventCard from './parts/EventCard';
class WedDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }
    
    render() { 
        const { theme } = this.props;
        return (
            <Fragment>
                <div className="w-9/12 container mx-auto h-screen">
                    <div className={`text-center ${theme.headerStyle} text-5xl pb-12 pt-12`}>Events</div>
                    <div className="columns-1 md:columns-2">
                        <div className={`${ theme.borderStyle } p-3 mb-3`}>
                            <EventCard 
                                theme={ theme }
                                event="Akad Nikah &amp; Resepsi"
                                date="Minggu, 11 September 2022"
                                time="09.00 - Selesai"
                                place1="Kediaman Mempelai Wanita"
                                place2="Desa Gunungsari, Kec. Bonegunu, Kab. Buton Utara, Sulawesi Tenggara"
                            />
                        </div>
                        <div className={`${ theme.borderStyle } p-3`}>
                            <EventCard 
                                theme={ theme }
                                event="Syukuran"
                                date="Minggu, 25 September 2022"
                                time="10.00 - Selesai"
                                place1="Kediaman Mempelai Pria"
                                place2="Jalan Sunan Kalijaga Gg IV 4A RT 03/ RW 02 Kel. Berkoh, Purwokerto Selatan, Kab. Banyumas, Jawa Tengah"
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default WedDate;