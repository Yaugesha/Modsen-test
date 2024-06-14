import { Highlited, Input, NavList, Socials, StyledFooter } from './styled';
import linkedin from '@assets/images/socials/linkedin.svg';
import facebook from '@assets/images/socials/facebook.svg';
import instagram from '@assets/images/socials/instagram.svg';
import twitter from '@assets/images/socials/twitter.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <NavList>
          <li>Contact</li>
          <li>Terms of services</li>
          <li>Shipping and returns</li>
        </NavList>
      </nav>
      <Input type="email" placeholder="Give an email, get the newsletter." />
      <p>
        <Highlited>© 2023 Shelly.</Highlited> Terms of use{' '}
        <Highlited>and</Highlited> privacy policy.
      </p>
      <Socials>
        <img src={linkedin} alt="linkedin" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
