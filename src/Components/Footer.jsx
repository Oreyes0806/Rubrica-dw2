import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='flex justify-around gap-2 px-12 py-4 mt-8 border-t-2 flex-wrap md:flex-nowrap'>
        <div className='flex flex-col items-center w-full md:w-1/3'>
            <h2 className='font-bold text-xl'>BestSport</h2>
            <ul className='flex flex-col'>
                <li><Link>Sports</Link></li>
                <li><Link>Create Sport</Link></li>
            </ul>
        </div>
        <div className='flex flex-col items-center gap-2 w-full md:w-1/3 border'>
            <h2 className='font-bold text-xl text-center'>Redes Sociales</h2>
            <ul className='flex  items-center gap-2'>
                <li><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg></Link></li>
                <li><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
</svg></Link></li>
                <li><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
</svg></Link></li>
                <li><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64">
<radialGradient id="jAVUMfCM1liBjYZwQpghOa_118979_gr1" cx="32" cy="31.5" r="31.259" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#c5f1ff"></stop><stop offset=".35" stopColor="#cdf3ff"></stop><stop offset=".907" stopColor="#e4faff"></stop><stop offset="1" stopColor="#e9fbff"></stop></radialGradient><path fill="url(#jAVUMfCM1liBjYZwQpghOa_118979_gr1)" d="M58,54c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h2.5c1.925,0,3.5-1.575,3.5-3.5 S62.425,43,60.5,43H50c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5h8c1.65,0,3-1.35,3-3c0-1.65-1.35-3-3-3H42v-6h18 c2.335,0,4.22-2.028,3.979-4.41C63.77,19.514,61.897,18,59.811,18H58c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h0.357 c1.308,0,2.499-0.941,2.63-2.242C61.137,10.261,59.966,9,58.5,9h-14C43.672,9,43,8.328,43,7.5S43.672,6,44.5,6h3.857 c1.308,0,2.499-0.941,2.63-2.242C51.137,2.261,49.966,1,48.5,1L15.643,1c-1.308,0-2.499,0.941-2.63,2.242 C12.863,4.739,14.034,6,15.5,6H19c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2H6.189c-2.086,0-3.958,1.514-4.168,3.59 C1.78,15.972,3.665,18,6,18h2.5c1.933,0,3.5,1.567,3.5,3.5c0,1.933-1.567,3.5-3.5,3.5H5.189c-2.086,0-3.958,1.514-4.168,3.59 C0.78,30.972,2.665,33,5,33h17v11H6c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3h0c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2H4.189 c-2.086,0-3.958,1.514-4.168,3.59C-0.22,59.972,1.665,62,4,62h53.811c2.086,0,3.958-1.514,4.168-3.59C62.22,56.028,60.335,54,58,54z"></path><linearGradient id="jAVUMfCM1liBjYZwQpghOb_118979_gr2" x1="32" x2="32" y1="59.381" y2="15.381" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#155cde"></stop><stop offset=".278" stopColor="#1f7fe5"></stop><stop offset=".569" stopColor="#279ceb"></stop><stop offset=".82" stopColor="#2cafef"></stop><stop offset="1" stopColor="#2eb5f0"></stop></linearGradient><path fill="url(#jAVUMfCM1liBjYZwQpghOb_118979_gr2)" d="M50,12H14c-2.209,0-4,1.791-4,4v36c0,2.209,1.791,4,4,4h36c2.209,0,4-1.791,4-4V16 C54,13.791,52.209,12,50,12z"></path><path fill="#fff" d="M19 28h2c1.105 0 2 .895 2 2v17c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2V30C17 28.895 17.895 28 19 28zM19.981 25h-.033C18.158 25 17 23.664 17 22c0-1.706 1.195-3 3.019-3 1.823 0 2.948 1.294 2.981 3C23 23.664 21.842 25 19.981 25zM45 49h-2c-1.105 0-2-.895-2-2v-9.372c0-2.749-1.506-4.624-4.239-4.624-1.953 0-3.133 1.265-3.626 2.485C32.954 35.929 33 37.14 33 37.75V47c0 1.105-.888 2-1.993 2H29c-1.105 0-2-.895-2-2V30c0-1.105.895-2 2-2h2.007c1.105 0 2 .895 2 2v1.021C33.911 29.625 35.564 28 39.173 28 43.646 28 47 30.563 47 36.842V47C47 48.105 46.105 49 45 49z"></path>
</svg></Link></li>
            </ul>
        </div>
        <div className='flex flex-col items-center break-words w-full md:w-1/3 px-4'>
            <h2 className='font-bold text-xl'>Servicio al cliente</h2>
            <p className='font-base text-base text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo voluptate saepe a eaque voluptatibus numquam. Blanditiis consequuntur, obcaecati dolorum qui, expedita dolore id at tenetur quae ea soluta maxime.</p>
        </div>
    </footer>
  )
}
