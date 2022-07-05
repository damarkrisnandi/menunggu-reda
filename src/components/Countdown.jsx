import React, { Component, Fragment } from 'react';
import CountDownItem from './parts/CountdownItem';
class Countdown extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className="w-9/12 container mx-auto h-screen">
                    <div className="text-center header-text text-amber-300 text-5xl pb-12 pt-12">Counting Days</div>
                    <CountDownItem 
                        date="11-09-2022"
                        time="09:00"
                    />
                </div>
                
            </Fragment>
        );
    }
}
 
export default Countdown;