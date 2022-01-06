import { XCircle } from "react-feather";
import { SearchProps } from "../../shared/types";
import { Wrapper } from "./styles";

export const Search = ({ handler, term, resetHandler }: SearchProps) => {
  return (
    <Wrapper>
      <input type="text" name="search" value={term} onChange={handler} />
      {term && <XCircle onClick={resetHandler} />}
    </Wrapper>
  );
};
