import React from 'react';
import '../Stylesheets/BlogPost.css'
import styled from 'styled-components'


const ImgDiv = styled.div`

    background-image: url(${props => props.image});
    width: 80%;
    height: 50vh;
    margin-left: 10%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

`

const BlogPostComponent = (props) => {
    console.log(props.blogPost)
    const title = props.blogPost.Title;
    const content = props.blogPost.Content;
    const author = props.blogPost.Author;
    const date = props.blogPost.Date;
    const image = props.blogPost.Image;
    const tags = props.blogPost.Tags;
    let mappedTags
    if(tags)
    {
        mappedTags = tags.map(tag => <li>{tag}</li>);
    }
    return(
        <div className='post_div_main'>
            <div className='post_h1_title'>
                <h1>{title}</h1>
            </div>
            <div>
                <h3>{author}</h3>
                <h3>
                    {date}
                </h3>
            </div>
            <ImgDiv image = {image}>
                {/*An image is added in css*/}
            </ImgDiv>
            <hr className='post_horizontal_line'/>
            <div>
                <p className='post_p_content'>{content}</p>
            </div>
            <div className='post_tags_div'>
                {mappedTags}
            </div>
        </div>

    )
}

export default BlogPostComponent;