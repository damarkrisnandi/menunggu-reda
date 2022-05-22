import React, { Component, Fragment } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='
                    flex flex-col justify-center items-center 
                    h-screen bg-blue-400'>
                        <p>The wedding of</p>
                        <h1 className='header-text text-5xl'>
                            Damar &amp; Resita
                        </h1>
                </div>
                
            </Fragment>
            
        );
    }
}
 
export default Header;