import React, { Component, Fragment } from 'react';
import Card from './parts/Card';
class Family extends Component {
    constructor(props) {
        super(props);
        this.state = {}  
    }

    render() {
        const { theme } = this.props; 
        return (
            <Fragment>
                <div className='p-12'>
                    <div className="md:w-11/12 container mx-auto">
                        <div className={`flex justify-center items-center text-center ${theme.headerStyle} text-5xl pb-12 pt-12`}>
                            Bride 
                            <img src='/rings.png' alt="damar and yuni" className="w-10 h-10 m-5" />
                            Groom
                        </div>
                        <div className="columns-1 md:columns-2">
                            <div className=''>
                                <Card 
                                theme={ theme }
                                img="/4.png"
                                nama="Resita Sri Wahyuni"
                                desc1="Putri pertama dari"
                                father="Hardono"
                                mother="Sumarni"
                                instaUrl="https://www.instagram.com/resita_sri_wahyuni/"
                                />
                            </div>
                            <div>
                                <Card 
                                theme={ theme }
                                img="/5.png"
                                nama="Damar Krisnandi Ramdan"
                                desc1="Putra pertama dari"
                                father="Ismangil"
                                mother="Aladria Nurti Anggorowati"
                                instaUrl="https://www.instagram.com/damarkrisnandi/"
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className='md:w-3/5 mx-auto mt-20'>
                        <p className='text-white text-center text-md'>
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kami.
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Family;