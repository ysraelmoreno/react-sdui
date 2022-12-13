import { HTMLAttributes } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { ColumnContainer } from "./styles";
import type * as CSS from "csstype";

type IColumnProps = {
  children: React.ReactNode;
  hasAction?: boolean;
  onClick?: any;
} & HTMLAttributes<HTMLDivElement> &
  CSS.Properties;

function Column({ children, ...props }: IColumnProps) {
  const clickEvent = useLinkClickHandler(props?.onClick?.props?.url);

  return (
    <ColumnContainer
      {...props}
      hasAction={props?.onClick?.type === "action"}
      onClick={(event: any) => {
        if (props?.onClick) {
          clickEvent(event);
        }
      }}
    >
      {children}
    </ColumnContainer>
  );
}

export default Column;
