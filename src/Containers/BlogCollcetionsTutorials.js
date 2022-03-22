import React, {Component} from 'react'
import localinstance from '../axios/localInstance'
import BlogComponent from '../Components/blogComponent'
import Footer from './Footer'

class BlogCollections extends Component
{
    state = {
        entries: []
    }
    componentDidMount()
    {
        const baseURL = '/blog/collections/Tutorials'
        console.log(baseURL)
        localinstance.get(baseURL)
            .then(response => {
                console.log(response.data)
                this.setState({entries: response.data})
            })
            .catch(err => {
                console.log(err)
            })
    }


    render()
    {
        return(
            <div>
                <BlogComponent entries = {this.state.entries} />
                <Footer />
            </div>
        )
    }
}

export default BlogCollections