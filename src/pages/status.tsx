import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import { useParams } from "react-router";
import tournament_data from "../data/tournament-data";
import PlayTitle from "../components/play/title";
import PlayGameOption from "../components/play/juego";
import SvgIconCom from "../components/common/svg-icon-anim";
import StatusTitle from "../components/status/title";
import StatusOfSeason from "../components/status/status";


export default function StatusPage() {
  // get id from url
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Resultados" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title={tournament_data[1].title} subtitle={tournament_data[1].subtitle} bg="/assets/img/bg/breadcrumb_bg03.jpg" brd_img={tournament_data[1].thumb} />
        {/* breadcrumb area end */}

        <StatusTitle />

        <StatusOfSeason />


      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
