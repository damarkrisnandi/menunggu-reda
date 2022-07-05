import React, { Component, Fragment } from 'react';
import Card from './parts/Card';
class Family extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div>
                    <div className="w-9/12 container mx-auto h-screen">
                    <div className="text-center header-text text-amber-300 text-5xl pb-12 pt-12">Bride &amp; Groom</div>
                        <div className="columns-1 md:columns-2">
                            <div className=''>
                                <Card 
                                nama="Resita Sri Wahyuni"
                                desc1="Putri pertama dari"
                                father="Hardono"
                                mother="Sumarni"
                                />
                            </div>
                            <div>
                                <Card 
                                nama="Damar Krisnandi Ramdan"
                                desc1="Putra pertama dari"
                                father="Ismangil"
                                mother="Aladria Nurti Anggorowati"
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