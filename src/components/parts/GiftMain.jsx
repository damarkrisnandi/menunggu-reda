import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";


const ShowAccountAndQr = ({isShow}) => {
    const account = '6042666595';
    const [showDelay, setShowDelay] = useState(false);
    const [alert, setAlert]= useState(false);
    setTimeout(() => {
        setShowDelay(true);
    }, 100)
    const animationConstant = `duration-700 relative transform transition-all ease-in-out`;
    return (
        <Fragment>
            <div className={`${animationConstant} ${!showDelay ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"} w-11/12 pt-3 pb-3`}>
                <div className="flex justify-center items-center">
                    <img src={'./qris.jpg'} alt={'qris'} className="w-52 h-52 p-1 mb-3" />
                </div>

                <div>
                    <div className="flex justify-center items-center text-sky-300">
                        <p><strong>BCA</strong> - {account}</p>&nbsp;
                        <button onClick={async () => {
                            navigator.clipboard.writeText(account);
                            setAlert(true);
                        }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        </button>
                    </div>
                    <div className="flex justify-center items-center text-sky-300 mb-3">
                        <p>a/n Damar Krisnandi Ramdan</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center text-sky-300 mb-3">
                        <p className="font-semibold text-xs">ALAMAT</p>
                        <p className="text-center text-xs">Jalan Sunan Kalijaga Gg IV 4A RT 03 / RW 02, Berkoh, Purwokerto Selatan</p>
                </div>

                
                
            </div> 
            {alert ? (<Toast message='No Rekening dicopy ke clipboard!' isAlert={alert} setShow={val => {if (!val) {setAlert(false)}}}/>) : null}
            
        </Fragment>
    )
}

const Toast = ({isAlert,  message, setShow}) => {
    const [showDelay, setShowDelay] = useState(false);
    const [isClose, setClose] = useState(false);
    const animationConstant = `duration-700 relative transform transition-all ease-in-out`;

    useEffect(() => {
        if (isAlert && !isClose) {
            setTimeout(() => {
                setShowDelay(true);
            }, 100)

            setTimeout(() => {
                setClose(true);
                setShow(false)
            }, 3000)
        }
    });
    
    return isAlert && !isClose && (
        <div className="fixed top-1 left-1">
            <div id="toast-success" className={`${animationConstant} ${!showDelay ? "translate-y-16 opacity-0": "translate-y-0 opacity-100"} flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`} role="alert">
                <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Check icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">{message}</div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

const GiftMain = ({theme}) => {
    const [isShow, setShow] = useState(false); 
    return ( 
        <Fragment>
            <div className='w-11/12 md:w-8/12 mx-auto py-10'>
                        <div className="bg-sky-900 p-10 md:p-10 rounded-xl shadow-countdown
                        flex flex-col justify-center items-center py-10 md:h-auto
                        ">
                            <p className="text-sky-300 text-xs text-center mb-3">Silahkan klik tombol di bawah ini untuk mengirimkan hadiah kepada kami</p>
                            <button className={ `${theme.buttonStyle2}` } onClick={() => { setShow(true) }}>
                                <div className="flex justify-center items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg> 
                                    Kirim Kado
                                </div>
                            </button>
                            {isShow ? (<ShowAccountAndQr isShow={isShow} />) : null}
                            
                        </div>
                        
            </div>
        </Fragment> 
    );
}
 
export default GiftMain;