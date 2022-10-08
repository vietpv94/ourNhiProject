import belgium from "@Assets/images/molecules/language-selector/belgium.png";
import eng from "@Assets/images/molecules/language-selector/eng.png";
import vn from "@Assets/images/molecules/language-selector/vn.png";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { CountryFlag, LanguageSelectorWrapper, Main } from "./style";
export interface ILanguageSelectorProps {}

const data = [
  {
    id: 1,
    name: "English",
    img: eng,
  },
  {
    id: 2,
    name: "Vietnamese",
    img: vn,
  },
  {
    id: 3,
    name: "Belgium",
    img: belgium,
  },
];

export function LanguageSelector(props: ILanguageSelectorProps) {
  return (
    <LanguageSelectorWrapper>
      <Main>
        <CountryFlag src={eng} alt="eng" />
        <ArrowIcon style="solid" direction="down" color="#00a3ff" />
      </Main>
    </LanguageSelectorWrapper>
  );
}
