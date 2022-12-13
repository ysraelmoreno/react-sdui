import React, { useMemo } from "react";
import Column from "../Column";
import Container from "../Container";
import Image from "../Image";
import Menu from "../Menu";
import Row from "../Row";
import Text from "../Text";
interface IComponent {
  type: string;
  key: string;
  props: Record<string, any>;
}

interface IMapperProps {
  component: IComponent;
}
function Mapper({ component }: IMapperProps) {
  const Component: any = useMemo(() => {
    const components = {
      text: Text,
      column: Column,
      menu: Menu,
      container: Container,
      row: Row,
      image: Image,
    };

    return components[
      component.type as "text" | "column" | "container" | "row" | "image"
    ];
  }, []);

  return (
    <Component {...component.props}>
      {Object.keys(component.props).includes("children") &&
        component.props.children.map((inner: any) => (
          <React.Fragment key={inner.key}>
            <Mapper component={inner} />
          </React.Fragment>
        ))}
    </Component>
  );
}

export default Mapper;
