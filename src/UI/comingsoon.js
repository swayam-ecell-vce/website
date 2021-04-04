import React from 'react'
import Loader from 'react-loader-spinner'
import '../Stylesheets/loader.css'

const comingsoon = (props) =>
{
    return(

        <div className = 'Loader-Backdrop'>
            <div className='Loader-Div'>
                <div className='Sub-loader'>
                <Loader
                    type="Hearts"
                    color="#FF69B4"
                    height={100}
                    width={100}
                    visible={props.loading}
                />
                </div>
                <h3 className='Loading-H3'>
                    Coming <span className = 'Red-Span'>Soon</span>
                </h3>
            </div>
        </div>

    )
}

export default comingsoon