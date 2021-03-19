import React from 'react'
import Loader from 'react-loader-spinner'
import '../Stylesheets/loader.css'

const loader = (props) =>
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
                    Loading with <span className = 'Red-Span'>Luv</span> ... And <span className = 'Red-Span'>React</span>
                </h3>
            </div>
        </div>

    )
}

export default loader