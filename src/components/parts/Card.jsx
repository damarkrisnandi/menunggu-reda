import { Fragment } from "react";

const Card = ({nama, desc1, father, mother}) => {
    return ( 
        <Fragment>
            <div className='
                    flex flex-col justify-center items-center 
                    h-52'>
                <div className="header-text text-2xl text-amber-300 text-center">{nama || 'Default Nama'}</div>
                <div className="text-white text-sm text-center">{desc1}</div>
                <div className="text-white font-semibold text-center">Bapak {father} &amp; Ibu {mother}</div>
                
            </div>
        </Fragment>
    );
}
 
export default Card;