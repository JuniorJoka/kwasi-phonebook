import { ReactNode } from "react";

import { Wrapper } from "./styles";

export const Detail = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};
