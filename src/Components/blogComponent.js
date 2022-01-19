import React from 'react'
import '../Stylesheets/Blog.css'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'

const ImgDiv = styled.div`

    background-image: url(${props => props.image});
    width: 40%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

`

const BlogComponent = (props) => {
    let history = useHistory()
    let entriesMapped = null

    if(props.entries)
    {
       entriesMapped = props.entries.map(res => {
           const title = res.Title
           const author = res.Author
           const image = res.Image
           const date = res.Date
           const content = res.Content

           const blogHandler = (event) => {

           }

           return(
               <NavLink to={`/blog/${res._id}`} className='blog_post_NavLink'>
                <div className='blog_main'>
                    <div>
                            <h1 className='blog_title'>
                                {title}
                            </h1>
                    </div>

                    <div className='blog_content'>
                        <ImgDiv className='blog_img'  image = {image}>

                        </ImgDiv>
                        <div className='blog_vert_line'>
                            {/*A vertical line is added in the css*/}
                        </div>
                        <div  className='blog_entry'>
                            <div className='blog_para'>
                                <h3 className='blog_h3'>
                                    Blog Post
                                </h3>
                                <br />
                                {content.length > 500? `${content.slice(0, 500)}...`: content}
                            </div>
                        </div>
                    </div>
                </div>
               </NavLink>
           )
        })
    }

    //function to get time

    return(
        <div className='blog_container'>
            <div className='blog_head_text'>
                Latest Posts
            </div>
            {entriesMapped}
        </div>
    )
}

export default BlogComponent