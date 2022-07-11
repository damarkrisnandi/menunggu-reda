import React, { Component, Fragment } from 'react';
class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     
    render() { 
        const { theme } = this.props;
        return (
            <Fragment>
                <div className="w-9/12 container mx-auto h-screen">
                    <div className={`text-center ${ theme.headerStyle } text-5xl pb-12 pt-12`}>
                        Our Love Story
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Timeline;