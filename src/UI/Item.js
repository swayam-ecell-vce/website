import styled from 'styled-components'

const Div = styled.div `

height: 20vh;
width: 20vh;
background-image: url(${props => props.urlparam || 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

`