import { IRowProps, RowContainer } from "./styles";

interface RowProps extends IRowProps {
  children: React.ReactNode;
}
function Row({ alignItems, children, gap, ...props }: RowProps) {
  return (
    <RowContainer alignItems={alignItems} gap={gap} {...props}>
      {children}
    </RowContainer>
  );
}

export default Row;
