import styled, { css } from "styled-components";

interface IContainerWrapperProps {
  fillScreen: boolean;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}
export const ContainerWrapper = styled.div<IContainerWrapperProps>`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  ${(props) =>
    props.fillScreen &&
    css`
      max-width: 100%;
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

    ${(props) =>
    props.marginLeft &&
    css`
      margin-left: ${props.marginLeft};
    `}

    ${(props) =>
    props.marginRight &&
    css`
      margin-right: ${props.marginRight};
    `}


    ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop};
    `}


    ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}
`;
