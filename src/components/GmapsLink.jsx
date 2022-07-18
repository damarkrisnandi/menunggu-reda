/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, Fragment } from 'react';
import MapEmbed from './parts/MapEmbed';
class GmapsLink extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        const { theme } = this.props;
        return (
            <Fragment>
                <div className="container w-10/12 mx-auto">
                    <div className={`text-center ${ theme.headerStyle } text-5xl pb-12 pt-12`}>
                        Lokasi Acara
                    </div>
                
                <div className="flex flex-col justify-start items-center">
                    <MapEmbed 
                    width={window.screen.width * 10 / 12} 
                    height={window.screen.height / 2}
                    src="https://maps.google.com/maps?q=Bengkel%20las%20komang%20w%20ronta&t=&z=11&ie=UTF8&iwloc=&output=embed"/>
                    <MapEmbed 
                    width={window.screen.width * 10 / 12} 
                    height={window.screen.height /2} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2315986931394!2d109.26321591405707!3d-7.439607275364743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655dc8fcd927af%3A0xa338d2c5b0c24953!2sKost%20Putri%20%22Rumah%20Kelapa%20Gading%22!5e0!3m2!1sid!2sid!4v1658109833018!5m2!1sid!2sid"/>
                </div>
                </div>
            </Fragment>
        );
    }
}
 
export default GmapsLink;