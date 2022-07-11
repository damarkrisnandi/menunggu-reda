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
                <div>
                    <div className="w-9/12 container mx-auto h-screen">
                    <div className={`text-center ${theme.headerStyle} text-5xl pb-12 pt-12`}>Bride &amp; Groom</div>
                        <div className="columns-1 md:columns-2">
                            <div className=''>
                                <Card 
                                theme={ theme }
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
                                nama="Damar Krisnandi Ramdan"
                                desc1="Putra pertama dari"
                                father="Ismangil"
                                mother="Aladria Nurti Anggorowati"
                                instaUrl="https://www.instagram.com/damarkrisnandi/"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Family;