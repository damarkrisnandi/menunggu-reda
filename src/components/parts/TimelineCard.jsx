import { Fragment } from "react";

const TimelineCard = ({img, title, desc, theme}) => {
    console.log(img);
    return ( 
    <Fragment>
        <div className='
                    flex flex-col justify-center items-center p-5'>
                <img src={img} alt="test" className="w-56 h-56 p-1 rounded-lg border-white border-2 mb-5" />
                <div className={`${theme.headerStyle} text-2xl text-center`}>{ title || 'Default Nama' }</div>
                <div className="text-white text-sm text-center">{ desc || 'Default desc' }</div>
                
                <div className="mb-5"></div>
            </div>
    </Fragment> 
    );
}
 
export default TimelineCard;