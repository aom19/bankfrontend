import React from "react";
import icon1 from "../../images/svg-5.svg";
import icon2 from "../../images/svg-6.svg";
import icon3 from "../../images/svg-7.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWraper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Services</ServicesH1>
      <ServicesWraper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2> Virtual Offices </ServicesH2>
          <ServicesP>
            You can accces our platform onlin anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2> Premium Benefits </ServicesH2>
          <ServicesP>
            Unlock our special membership card that return 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWraper>
    </ServicesContainer>
  );
};

export default Services;
