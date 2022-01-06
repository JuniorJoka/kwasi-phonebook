import { Plus } from "react-feather";

import { voidFunc } from "../../shared/types";
import { Wrapper } from "./styles";

export const Header = ({ handler }: { handler: voidFunc }) => {
  return (
    <Wrapper>
      <div></div>
      <h2>Contacts</h2>
      <Plus onClick={handler} />
    </Wrapper>
  );
};
