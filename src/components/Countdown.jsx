import React, { Component, Fragment } from 'react';
import CountDownItem from './parts/CountdownItem';
import utils from '../utils/utils.json'
class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() { 
        const { theme } = this.props;
        const { dateFormat, timeFormat } = utils.events.filter(({hidden}) => !hidden)[0];
        return (
            <Fragment>
                <div className="w-9/12 container mx-auto h-screen">
                    <div className={`text-center ${ theme.headerStyle } text-5xl pb-12 pt-12`}>Counting Days</div>
                    <CountDownItem 
                        theme={ theme }
                        date={ dateFormat }
                        time={ timeFormat }
                    />
                </div>
                
            </Fragment>
        );
    }
}
 
export default Countdown;