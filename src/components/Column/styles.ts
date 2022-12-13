import styled, { css } from "styled-components";
import type * as CSS from "csstype";

interface IColumnContainerProps extends CSS.Properties {
  hasAction?: boolean;
}

export const ColumnContainer = styled.div<IColumnContainerProps>`
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

    ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

    ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `}

    ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

    ${(props) =>
    props.gap &&
    css`
      gap: ${typeof props.gap === "number" ? `${props.gap}px` : props.gap};
    `}

    ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
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

    ${(props) =>
    props.hasAction &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;
