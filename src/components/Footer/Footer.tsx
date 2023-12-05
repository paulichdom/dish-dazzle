import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <CopyrightText>
          &copy; {new Date().getFullYear()} Dish Dazzle. All rights reserved.
        </CopyrightText>
      </ContentWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 32px;
  background: linear-gradient(180deg, #f5f5f5, #e0e0e0);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;
