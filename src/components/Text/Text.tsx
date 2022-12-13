import { HTMLAttributes, useMemo } from "react";

export interface ITextStyles {
  color: string;
  fontSize: number;
  fontWeight: number;
}

interface IText {
  text?: string;
  styles?: ITextStyles;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

interface ITextsProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  children: React.ReactNode;
}

function H1({ children, ...props }: ITextsProps) {
  return <h1 {...props}>{children}</h1>;
}
function H2({ children, ...props }: ITextsProps) {
  return <h2 {...props}>{children}</h2>;
}

function H3({ children, ...props }: ITextsProps) {
  return <h3 {...props}>{children}</h3>;
}

function H4({ children, ...props }: ITextsProps) {
  return <h4 {...props}>{children}</h4>;
}

function H6({ children, ...props }: ITextsProps) {
  return <h6 {...props}>{children}</h6>;
}
function H5({ children, ...props }: ITextsProps) {
  return <h5 {...props}>{children}</h5>;
}
function Paragraph({ children, ...props }: ITextsProps) {
  return <p {...props}>{children}</p>;
}

function Text({ text, type = "p", styles, ...props }: IText) {
  const TextComponent = useMemo(() => {
    const components = {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: Paragraph,
    };

    return components[type];
  }, [type]);

  return (
    <TextComponent style={styles} {...props}>
      {text}
    </TextComponent>
  );
}

export default Text;
