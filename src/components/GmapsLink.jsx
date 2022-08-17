/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, Fragment } from 'react';
import MapEmbed from './parts/MapEmbed';
import utils from '../utils/utils.json'
class GmapsLink extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        const { theme } = this.props;
        const { gmapsEmbedUrl } = utils.events.filter(({hidden}) => !hidden)[1]
        return (
            <Fragment>
                <div className="container w-10/12 mx-auto">
                    <div className={`text-center ${ theme.headerStyle } text-5xl pb-12 pt-12`}>
                        Lokasi Acara
                    </div>
                
                    <div className="flex flex-col justify-start items-center">
                        <MapEmbed 
                            width={window.screen.width >= 1000 ? window.screen.width * 9 / 12 : window.screen.width * 14 / 15} 
                            height={window.screen.height / 2}
                            src={gmapsEmbedUrl} />
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default GmapsLink;