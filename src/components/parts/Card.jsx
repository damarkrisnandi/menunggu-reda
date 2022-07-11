import { Fragment } from "react";
import './instagram.css'

const Card = ({nama, desc1, father, mother, instaUrl, theme}) => {
    return ( 
        <Fragment>
            <div className='
                    flex flex-col justify-center items-center 
                    h-52'>
                <div className={`${theme.headerStyle} text-2xl text-center`}>{nama || 'Default Nama'}</div>
                <div className="text-white text-sm text-center">{desc1}</div>
                <div className="text-white font-semibold text-center">Bapak {father} &amp; Ibu {mother}</div>
                
                <div className="mb-5"></div>
                <a href={instaUrl} target="_blank" rel="noopener noreferrer" >
                    <button className="gg-instagram"></button>
                </a>
            </div>
        </Fragment>
    );
}
 
export default Card;