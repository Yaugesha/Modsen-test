import facebook from '@assets/images/socials/facebook.svg';
import instagram from '@assets/images/socials/instagram.svg';
import linkedin from '@assets/images/socials/linkedin.svg';
import twitter from '@assets/images/socials/twitter.svg';
import Group from '@components/Containers/Group';

import { Highlited, Input, NavList, StyledFooter } from './styled';

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
      <Group gap={30} justify="end" align="center">
        <img src={linkedin} alt="linkedin" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </Group>
    </StyledFooter>
  );
};

export default Footer;
