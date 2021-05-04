import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />   
                    <SignIn>GET ALL THERE</SignIn>
                    <Description>
                    Disney+ Account Sign In. Please enter your email and password log in credentials to start streaming movies and TV series from Disney+ streaming.
                    </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>    
        </Container>
    )
}
 
export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        content: "";
        position: absolute;
        top: 0;
        left :0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 4px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;


`

const CTALogoOne = styled.img`

`
const SignIn = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    text-align: center;
    font-weight: 500;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: all 150ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 16px;

    &:hover {
        filter: brightness(120%);
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center 
`

const CTALogoTwo = styled.img`
    width: 90%;
    margin: 0 auto;

`