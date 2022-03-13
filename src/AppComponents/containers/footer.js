import React from 'react'
import Footer from '../components/Footer'
import Icon from '../components/icons'
// import { Link } from 'react-router-dom'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Directorate of Sports</Footer.Link>
                    <Footer.Link href="#">SSAs</Footer.Link>
                    <Footer.Link href="#">GSC</Footer.Link>
                    <Footer.Link href="#">SIGs</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Events</Footer.Title>
                    <Footer.Link href="#">Event Description</Footer.Link>
                    <Footer.Link href="#">Registration</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">GITAM Visakhapatnam campus</Footer.Link>
                    <Footer.Link href="#">GITAM Hyderabad campus</Footer.Link>
                    <Footer.Link href="#">GITAM Bengaluru campus</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}