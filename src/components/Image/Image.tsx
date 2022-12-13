import { ImageContainer } from "./styles";

interface ImageProps {
  url: string;
  maxWidth?: string | number;
  objectFit?: "cover" | "contain";
  aspectRatio?: string;
  children?: React.ReactNode;
}

function Image({ url, children, ...props }: ImageProps) {
  return <ImageContainer src={url} {...props} />;
}

export default Image;
