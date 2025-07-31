import { HeaderWp } from "../HeaderWp";
import content from "../../data/whitepace.json";
import { ProjectManagement } from "../ProjectManagement";
import { HeroWp } from "../HeroWp";
import { WordTogether } from "../WordTogether";
import { UseAsExtension } from "../UseAsExtension";
import { Customise } from "../Customise";
import { ChooseYourPlan } from "../ChooseYourPlan";
import { YourWork } from "../YourWork";
import { OurSponsors } from "../OurSponsors";
import { WorkWith } from "../WorkWith";
import { ClientsSays } from "../ClientsSays";
import { FooterWp } from "../FooterWp";
export const WhiteSpace = () => {
  return (
    <div>
      <HeaderWp content={content.header} />
      <main>
        <HeroWp content={content.hero} />
        <ProjectManagement content={content.project_management} />
        <WordTogether
          content={{ ...content.work_together, isImageLeft: true }}
        />
        <UseAsExtension content={content.use_as_extension} />
        <Customise content={content.customise} isImageLeft={true} />
        <ChooseYourPlan content={content.blog} />

        <YourWork content={content.cta} />
        <Customise content={content.your_data} isImageLeft={false} />
        <OurSponsors content={content.our_sponsors} />
        <WorkWith content={{ ...content.work_with_your, isImageLeft: true }} />
        <ClientsSays content={content.clients_say} />
      </main>
      <FooterWp content={content.footer} />
    </div>
  );
};
