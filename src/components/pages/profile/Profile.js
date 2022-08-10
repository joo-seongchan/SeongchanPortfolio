import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../ScrollTop";
import { ProSection1 } from "./ProSection1";
import { ProSection2 } from "./ProSection2";
import { ProSection3 } from "./ProSection3";

export const Profile = () => {
  return (
    <>
      <PageTitle title={"ProFile"} />
      <ScrollTop />

      <ProSection1 />
      <ProSection2 />
      <ProSection3 />
    </>
  );
};
