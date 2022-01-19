import React, {Component} from "react";
import instance from "../axios/localInstance";
import localinstance from "../axios/localInstance";
import BlogPostComponent from "../Components/blogPostComponent";

class BlogEntry extends Component
{
    state = {
        blogPost: {}
    }

    componentDidMount()
    {
        const urlpath = '/blog/' + this.props.match.params.id
        localinstance.get(urlpath)
        .then(res => {
            this.setState({
                blogPost: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render()
    {
        return(
            <BlogPostComponent blogPost = {this.state.blogPost}/>
        )
    }
}

export default BlogEntry;