import styled from 'styled-components';

const CONATACT_GAP = '108px';
const CONATACT_WIDTH = '908px';
const CONATACT_MARGIN_BOTTOM = '250px';

const CONATACT_HEDING_MARGIN_TOP = '125px';
const CONATACT_DESCRIPTION_WIDTH = '560px';

const StyledContact = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: ${CONATACT_GAP};

  max-width: ${CONATACT_WIDTH};
  margin: ${props => props.theme.margins.center};
  margin-bottom: ${CONATACT_MARGIN_BOTTOM};
`;

const Heading = styled.h2`
  ${props => props.theme.typography.h1}

  margin-top: ${CONATACT_HEDING_MARGIN_TOP};
`;

const ContactDescribtion = styled.p`
  ${props => props.theme.typography.h3}
  max-width: ${CONATACT_DESCRIPTION_WIDTH};
`;

export { ContactDescribtion, Heading, StyledContact };
