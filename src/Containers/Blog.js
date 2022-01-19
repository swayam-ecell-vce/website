import React, {Component} from 'react'
import localinstance from '../axios/localInstance'
import BlogComponent from '../Components/blogComponent'

class Blog extends Component
{
    state = {
        entries: []
    }
    componentDidMount()
    {
        localinstance.get('/blog')
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
            </div>
        )
    }
}

export default Blog