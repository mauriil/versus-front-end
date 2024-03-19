import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import HeroBanner from "../components/hero-banner/hero-banner";
import Footer from "../layout/footer/footer";
import TournamentArea from "../components/tournaments/tournament-area";
import TournamentListArea from "../components/tournaments/tournament-list-area";
import ServicesArea from "../components/services/services-area";
import FaqArea from "../components/faq/faq-area";

export default function Home() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* tournament area start */}
        <TournamentArea />
        {/* tournament area end */}

        {/* Services area start*/}
        <ServicesArea />
        {/* Services area end*/}

        <FaqArea />

        {/* tournament list area start */}
        <TournamentListArea />
        {/* tournament list area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
