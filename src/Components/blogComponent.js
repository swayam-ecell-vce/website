import React, {useEffect, useState} from 'react'
import '../Stylesheets/Blog.css'
import styled from 'styled-components'
import BlogNav from './blogNav'
import { useHistory } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

const ImgDiv = styled.div`

    background-image: url(${props => props.image});
    width: 40%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

`

const FeatureDiv = styled.div`

    background-image: url(${props => props.image});
    width: 100%;
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 7px;

`

const BlogComponent = (props) => {
    let history = useHistory()
    let entriesMapped
    let FeaturedEntry

    if(props.entries)
    {
       entriesMapped = props.entries.map(res => {
           const title = res.Title
           const author = res.Author
           const image = res.Image
           const date = res.Date
           const content = res.Content
           const tags = res.Tags
           if(res.Featured)
           {
                FeaturedEntry = res
                return
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

    let featuredEntryPost

    if(FeaturedEntry)
    {
        featuredEntryPost =
        <div className='blog_featured'>
            <NavLink to={`/blog/${FeaturedEntry._id}`} className='blog_post_NavLink'>
                <FeatureDiv image = {FeaturedEntry.Image}>
                    <div className='blog_img_text'>
                        Featured Article
                    </div>
                    <div className='blog_img_title'>
                        {FeaturedEntry.Title}
                    </div>
                </FeatureDiv>
            </NavLink>
        </div> 
    }

    //function to get time

    return(
        <div className='blog_container'>
            {featuredEntryPost}
            <BlogNav key = '/blog/collections/'/>
            {entriesMapped}
        </div>
    )
}

export default withRouter(BlogComponent)