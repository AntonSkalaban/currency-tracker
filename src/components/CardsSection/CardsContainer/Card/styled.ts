import { styled } from "styled-components";

export const StyledCardContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.bgSecondary};

  display: flex;
  align-items: center;
  gap: 30px;

  padding: 30px 27px;

  border: 1px solid rgba(71, 71, 71, 1);
  border-radius: 8px;

  @media ${({ theme }) => theme.media.large} {
    padding: 20px 20px;
    gap: 15px;
  }

  @media ${({ theme }) => theme.media.medium} {
    padding: 10px 15px;
    gap: 30px;
  }
`;

export const StyledIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: pink;

  @media ${({ theme }) => theme.media.medium} {
    width: 60px;
    height: 60px;
  }
  @media ${({ theme }) => theme.media.extraSmall} {
    width: 50px;
    height: 50px;
  }
`;

export const StyledCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
