import React, { Component, Fragment } from 'react';
import EventCard from './parts/EventCard';
import utils from '../utils/utils.json'
class WedDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }
    
    render() { 
        const { theme } = this.props;
        const dataLength = utils.events.filter(({hidden}) => !hidden).length;
        return (
            <Fragment>
                <div className="w-11/12 container mx-auto mt-10">
                    <div className={`text-center ${theme.headerStyle} text-5xl pb-12 pt-12`}>Events</div>
                    <div className={`columns-1 md:columns-${dataLength}`}>
                        {utils.events.filter(({hidden}) => !hidden).map( data => (
                            <div key={data.id} className={`${ theme.borderStyle } p-3 mb-3`}>
                                <EventCard 
                                    theme={ theme }
                                    event={data.event}
                                    date={data.dateMain}
                                    time={data.time}
                                    place1={data.place1}
                                    place2={data.place2}
                                    gmapsEmbedUrl={data.gmapsEmbedUrl}
                                />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default WedDate;