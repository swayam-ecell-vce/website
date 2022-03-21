import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const BlogNav = (props) =>
{
    return(
        <div className='blog_nav_div'>
                <li className='blog_nav_li'>
                    <ul>
                        <NavLink to='/blog' replace className='blog_nav_link'>
                            Recent Posts
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to='/blog/collections/Tech' replace className='blog_nav_link'>
                                Technology
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to='/blog/collections/Business' replace className='blog_nav_link'>
                            Business
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to='/blog/collections/Tutorials' replace className='blog_nav_link'>
                            Tutorials
                        </NavLink>
                    </ul>
                </li>
            </div>
    )
}

export default BlogNav