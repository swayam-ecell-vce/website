import React, {Component} from "react";
import instance from "../axios/localInstance";
import localinstance from "../axios/localInstance";
import BlogPostComponent from "../Components/blogPostComponent";
import Footer from '../Containers/Footer'


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
            <React.Fragment>
                <BlogPostComponent blogPost = {this.state.blogPost}/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default BlogEntry;