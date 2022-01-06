import { Wrapper } from "./styles";

export const Search = ({ handler, term }: { handler: (event: any) => void; term: string }) => {
  return (
    <Wrapper>
      <input type="text" name="search" value={term} onChange={handler} />
    </Wrapper>
  );
};
