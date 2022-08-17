import React, { Component, Fragment } from 'react';
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading1: true,
            loading2: true,
            loading3: true,
            guest: ''
        }  
    }
    
    componentDidMount() {
        this.setGuest();
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

    setGuest = () => {
        const params = new URLSearchParams(window.location.search)
        if (params.has('to')) this.setState({ guest: params.get('to') })
    }

    render() {
        const animationConstant = `duration-700 relative transform transition-all ease-in-out`;
        const { theme } = this.props
        return (
            <Fragment>
                <div className='h-screen bg-all'>
                        <div className={`box w-10/12 mx-auto ${theme.bgColor}`}>
                            <div className='box-inner flex flex-col justify-center items-center'>
                            <p className={`${animationConstant} z-30 mb-10 ${theme.textColor} ${theme.bgColor} ${this.state.loading1 ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                                    The Wedding of
                                </p>
                                <h1 className={`flex justify-center items-center ${theme.headerStyle} text-4xl md:text-6xl mb-10 ${animationConstant} ${this.state.loading2 ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"} glow`}>
                                    Yuni
                                    <img src='/rings.png' alt="damar and yuni" className="w-10 h-10 m-5"/>
                                    Damar
                                </h1>
                                {/* <p className={`${animationConstant} z-30 text-center ${theme.textColor} mb-10 ${this.state.loading1 ? "-translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                                    11 September 2022 &amp; 25 September 2022
                                </p> */}
                                <div className={`${animationConstant} ${theme.textColor} z-30 ${this.state.loading1 ? "-translate-y-16 opacity-0": "translate-y-0 opacity-100"}`}>
                                    <p className='text-center text-xs'>Kepada Yth.</p>
                                    <p className='text-center text-xs'>Bapak/Ibu/Saudara/i</p>
                                    <p className='text-center font-semibold text-lg'>{ this.state.guest }</p>
                                    <p className='text-center text-xs'>Di tempat</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Fragment>
            
        );
    }
}
 
export default Header;