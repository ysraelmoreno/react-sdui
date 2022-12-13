import styled, { css } from "styled-components";

export interface IImageProps {
  maxWidth?: string | number;
  objectFit?: "cover" | "contain";
  aspectRatio?: string;
}

export const ImageContainer = styled.img<IImageProps>`
  width: 100%;

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

  ${(props) =>
    props.objectFit &&
    css`
      object-fit: ${props.objectFit};
    `}

    ${(props) =>
    props.aspectRatio &&
    css`
      aspect-ratio: ${props.aspectRatio};
    `}
`;
