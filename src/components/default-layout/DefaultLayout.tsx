import React from 'react';

import { StyledContainer } from './styled/defaultLayout.styled';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
