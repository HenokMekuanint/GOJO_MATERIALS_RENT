import React from 'react';
function DefaultLayout(props){

    return(
        <div>
        <div className='header bs1'>
            <div className='d-flex justify-content-between'>
            <h1>GOJO MATERIAL RENT</h1>   
            <button>user</button>
            </div>

        </div>
        <div className='content'>
            {props.children}
        </div>

        <div className='footer bs1'>
            <div className='d-flex justify-content-between'>
            <h1>GOJO MATERIAL RENT</h1>   
            </div>

        </div>
        </div>
    )
}
export default DefaultLayout