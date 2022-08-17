import { Fragment } from "react";
import './instagram.css'

const Card = ({nama, desc1, father, mother, instaUrl, theme, img}) => {
    return ( 
        <Fragment>
            <div className={`
                    flex flex-col justify-center items-center p-5 rounded-lg ${theme.bgColor} `}>
                <img src={img} alt={nama} className="w-28 h-28 p-1 rounded-full border-white border-2 mb-5" />
                <div className={`${theme.headerStyle} text-2xl text-center`}>{nama || 'Default Nama'}</div>
                <div className="text-white text-sm text-center">{desc1}</div>
                <div className="text-white font-semibold text-center">Bapak {father} &amp; Ibu {mother}</div>
                
                <div className="mb-5"></div>
                <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="mb-5">
                    <button className="gg-instagram transition-all duration-200 delay-100 transform hover:scale-125"></button>
                </a>
            </div>
        </Fragment>
    );
}
 
export default Card;