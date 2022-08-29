import {
    FaEnvelope,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa'

import {
    FooterContainer,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterContainer id="contact">
            <SocialMediaWrap>
                <SocialIcons>
                    <SocialIconLink
                        href='mailto:taguaradigital@hotmail.com'
                        target='_blank'
                        aria-label='Email'
                    >
                        <FaEnvelope />
                    </SocialIconLink>
                    <SocialIconLink
                        href={ 'https://twitter.com/TaguaraDigital' }
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <FaTwitter />
                    </SocialIconLink>

                    <SocialIconLink
                        href={ 'https://www.instagram.com/taguara_digital/' }
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <FaInstagram />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </FooterContainer>
    )
}

export default Footer;