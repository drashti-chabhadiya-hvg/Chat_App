import React from 'react'
import styled from 'styled-components'
import hii from '../assest/hiii.gif'
export const Welcom = ({currentUser}) => {
  return (
    <Container>
        <img src={hii} alt='image'/>
        <h1>Welcome, <span>{currentUser?.username} </span>!</h1>
        <h3>Please select a chat to start Messaging.</h3>
    </Container>
  )
}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e0eff;
}

`;
