import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
     FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to = '/signin'>
                            Operation
                        </FooterLink>
                        <FooterLink to = '/signin'>
                                Careers
                        </FooterLink>
                    <FooterLink to = '/signin'>
                        Partners
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Terms of Services
                    </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact  Us</FooterLinkTitle>
                    <FooterLink to = '/signin'>
                        Contact
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Customer Care
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Support
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Address
                    </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>For Doctors</FooterLinkTitle>
                    <FooterLink to = '/signin'>
                        Partner Us
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Profile
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Dashboard
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Analysis
                    </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>For Patients</FooterLinkTitle>
                    <FooterLink to = '/signin'>
                        Search Doctors
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Search Hospitals
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Book Appointments
                    </FooterLink>
                    <FooterLink to = '/signin'>
                        Get Medicines
                    </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer> 
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer