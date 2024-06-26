import { FC } from "react";

import { Wrapper } from "components";
import { CardData } from "types";

import { CardsContainer } from "./CardsContainer";
import { StyledCardsSection, StyledCardsSectionHeader, StyledCardsSectionTitle } from "./styled";

interface CardsSectionProps {
  title: string;
  data: CardData[];
  isFetching: boolean;
  withModal?: boolean;
}

export const CardsSection: FC<CardsSectionProps> = ({ title, data, isFetching, withModal }) => {
  return (
    <StyledCardsSection>
      <Wrapper>
        <StyledCardsSectionHeader>
          {" "}
          <StyledCardsSectionTitle>{title}</StyledCardsSectionTitle>
        </StyledCardsSectionHeader>
        <CardsContainer cards={data} isFetching={isFetching} withModal={withModal} />
      </Wrapper>
    </StyledCardsSection>
  );
};
