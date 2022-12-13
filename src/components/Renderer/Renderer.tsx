import React, { useState, useEffect } from "react";
import api from "../../service/api";
import Mapper from "./Mapper";
import Menu from "../Menu";

interface IRendererProps {
  url: string;
}

interface Response {
  menu: any;
  content: any;
}
function Renderer({ url }: IRendererProps) {
  const [page, setPage] = useState<Response>({} as Response);

  useEffect(() => {
    (async () => {
      const data = await api.get(url);

      setPage(data.data);
    })();
  }, []);

  return (
    <>
      <Menu items={page?.menu?.props.items} logo={page?.menu?.props.logo} />

      {page.content?.map((component: any) => (
        <React.Fragment key={component}>
          <Mapper component={component} />
        </React.Fragment>
      ))}
    </>
  );
}

export default Renderer;
