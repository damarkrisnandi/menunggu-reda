import React, { Component, Fragment } from 'react';

class Header extends Component {
    state = { 
        loading1: true,
        loading2: true,
        loading3: true,
        guest: ''
    }
    componentDidMount() {
        this.setState({
            guest: window.location.pathname.split('/')[1]
        })
        // logic yang sangat mindblowing
        setTimeout(() => {
            this.setState({
                loading1: false,
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                loading2: false,
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                loading3: false,
            })
        }, 3000)
    }
    render() {
        const animationConstant = `duration-700 relative transform transition-all ease-in-out`;
        return (
            <Fragment>
                <div className='
                    flex flex-col justify-center items-center 
                    h-screen'>
                        <p className={`${animationConstant} z-30 mb-10 text-white ${this.state.loading1 ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}
                        >The Wedding of</p>
                        <h1 className={`header-text text-6xl text-amber-300 mb-10 ${animationConstant} ${this.state.loading2 ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"} glow`}>
                            Yuni &amp; Damar
                        </h1>
                        <p className={`${animationConstant} z-30 text-white mb-10 ${this.state.loading1 ? "-translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                            11 September 2022 &amp; 25 September 2022
                        </p>
                        <div className={`${animationConstant} z-30 text-white ${this.state.loading1 ? "-translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                            <p className='text-center'>Kepada Yth.</p>
                            <p className='text-center'>Bapak/Ibu/Saudara/i</p>
                            <p className='text-center font-bold text-lg'>{ this.state.guest }</p>
                            <p className='text-center'>Di tempat</p>
                        </div>
                </div>
            </Fragment>
            
        );
    }
}
 
export default Header;