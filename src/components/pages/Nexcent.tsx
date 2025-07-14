import { Header } from "../Header";
import content from "../../data/content.json";
import { Hero } from "../Hero";
import { Clients } from "../Clients";
import { CommunitySection } from "../Community";
import { ContactSection } from "../Contact_section";
import { StatsSection } from "../Stats";
import { Testimonials } from "../Testimonials";
import { BlogSection } from "../Blog_Section";
import { Footer } from "../Footer";
import { LayoutComponent } from "../layout/Layout";
import { ContentButton } from "../ContenButton";
export const Nexcent = () => {
  return (
    <div>
      <Header content={content.header} />
      <main>
        <Hero content={content.hero} />
        <Clients content={content.clients} />
        <CommunitySection content={content.community} />
        <ContactSection content={content.contact_the_unseen} />
        <StatsSection content={content.stats} />
        <ContactSection content={content.contact_how_to} />
        <Testimonials content={content.testimonial} />
        <BlogSection content={content.blog} />
        <ContentButton content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};
