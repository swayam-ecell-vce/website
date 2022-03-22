import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route, useHistory, withRouter} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

const linkTarget = {
    pathname: "/blog/collections/Tech",
    key: 'tech',
    state: {
      applied: true
    }
  };
  const linkTarget1 = {
    pathname: "/blog/collections/Business",
    key: 'business',
    state: {
      applied: true
    }
  };
  const linkTarget2 = {
    pathname: "/blog/collections/Tutorials",
    key: 'tutorials',
    state: {
      applied: true
    }
  };

const BlogNav = (props) =>
{
    const history = useHistory()
    const [urlupdate, seturlupdate] = useState(history.location.pathname)

    useEffect(() => {
        return history.listen((location) =>
        {
            seturlupdate(location.pathname)
            console.log('Changed the page to: ${location.pathname}')
        })
    }, [history])

    return(
        <div className='blog_nav_div'>
                <li className='blog_nav_li'>
                    <ul>
                        <NavLink key={'page_blog'} to='/blog' replace className='blog_nav_link' exact>
                            Recent Posts
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink key={'page_tech'} to={linkTarget} replace className='blog_nav_link' exact>
                                Technology
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink key={'page_business'} to={linkTarget1} replace className='blog_nav_link' exact>
                            Business
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink key={'page_tut'} to={linkTarget2} replace className='blog_nav_link' exact>
                            Tutorials
                        </NavLink>
                    </ul>
                </li>
            </div>
    )
}

export default withRouter(BlogNav)