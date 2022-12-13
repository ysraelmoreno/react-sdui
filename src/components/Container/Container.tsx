import { ContainerWrapper } from "./styles";

interface IContainerProps {
  fillScreen: boolean;
  children: React.ReactNode;
}
function Container({ fillScreen, children, ...props }: IContainerProps) {
  return (
    <>
      <ContainerWrapper fillScreen={fillScreen} {...props}>
        {children}
      </ContainerWrapper>
    </>
  );
}

export default Container;
