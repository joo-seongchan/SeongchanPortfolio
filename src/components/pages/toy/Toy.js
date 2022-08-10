import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../ScrollTop";
import { ToySection1 } from "./ToySection1";
import { ToySection2 } from "./ToySection2";
import { ToySection3 } from "./ToySection3";

export const Toy = () => {
  return (
    <>
      <ScrollTop />
      <PageTitle title={"ToyProject"} />
      <ToySection1 />
      <ToySection2 />
      <ToySection3 />
    </>
  );
};
