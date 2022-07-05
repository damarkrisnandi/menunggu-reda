import React, { Component, Fragment } from 'react';
import './Header.css'

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
                <div className='h-screen'>
                        <div className='box w-10/12 mx-auto'>
                            <dir className='box-inner flex flex-col justify-center items-center'>
                                <p className={`${animationConstant} z-30 mb-10 text-white ${this.state.loading1 ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                                    The Wedding of
                                </p>
                                <h1 className={`header-text text-5xl md:text-6xl text-amber-300 mb-10 ${animationConstant} ${this.state.loading2 ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"} glow`}>
                                    Yuni &amp; Damar
                                </h1>
                                <p className={`${animationConstant} z-30 text-center text-white mb-10 ${this.state.loading1 ? "-translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                                    11 September 2022 &amp; 25 September 2022
                                </p>
                                <div className={`${animationConstant} z-30 text-white ${this.state.loading1 ? "-translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                                    <p className='text-center text-xs'>Kepada Yth.</p>
                                    <p className='text-center text-xs'>Bapak/Ibu/Saudara/i</p>
                                    <p className='text-center font-semibold text-lg'>{ this.state.guest }</p>
                                    <p className='text-center text-xs'>Di tempat</p>
                                </div>
                            </dir>
                        </div>
                        
                </div>
            </Fragment>
            
        );
    }
}
 
export default Header;