import styled from '@emotion/styled';
import { Container } from '@mantine/core';

import { screenSize, spacings } from '@untils/index';

export const StyledContainer = styled(Container)`
  max-width: ${screenSize.largeDesktop}px;
  min-width: ${screenSize.mobile}px;

  padding: ${spacings.none}px;

  margin: ${spacings.none}px auto;

  background-color: red;
`;
