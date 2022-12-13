import styled, { css } from "styled-components";

export interface IRowProps {
  alignItems?: "center" | "end" | "start" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flex?: number | string;
  gap?: number | string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const RowContainer = styled.div<IRowProps>`
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  ${(props) =>
    props.gap &&
    css`
      gap: ${typeof props.gap === "number" ? `${props.gap}px` : props.gap};
    `}

    ${(props) =>
    props.flex &&
    css`
      flex: props.flex;
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
