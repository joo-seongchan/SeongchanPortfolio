import { useState } from "react";
import { useEffect } from "react";
import { PageTitle } from "../../PageTitle";
import { ScrollTop } from "../../ScrollTop";
import { PoSection1 } from "./PoSection1";
import { PoSection2 } from "./PoSection2";
import { PoSection3 } from "./PoSection3";
import { PoSection4 } from "./PoSection4";
import { PoSection5 } from "./PoSection5";
import { PoSection6 } from "./PoSection6";

export const Portpolio = () => {
  const [top2, setTop2] = useState("0");
  const [top3, setTop3] = useState("0");
  const [top4, setTop4] = useState("0");
  const [top5, setTop5] = useState("0");
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const section2top = sections[0].offsetTop;
    const section3top = sections[1].offsetTop;
    const section4top = sections[2].offsetTop;
    const section5top = sections[3].offsetTop;
    setTop2(section2top);
    setTop3(section3top);
    setTop4(section4top);
    setTop5(section5top);
  });
  console.log(top5);
  return (
    <>
      <ScrollTop />
      <PageTitle title={"PortPolio"} />
      <PoSection1
        section2top={top2}
        section3top={top3}
        section4top={top4}
        section5top={top5}
      />
      <div className="section">
        <PoSection2 />
      </div>
      <div className="section">
        <PoSection3 />
      </div>
      <div className="section">
        <PoSection4 />
      </div>
      <div className="section">
        <PoSection5 />
      </div>
      <PoSection6 />
    </>
  );
};
