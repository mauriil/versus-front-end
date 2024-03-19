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


export default function PlayPage() {
  // get id from url
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Juego" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title={tournament_data[0].title} subtitle={tournament_data[0].subtitle} bg="/assets/img/bg/breadcrumb_bg03.jpg" brd_img={tournament_data[0].thumb} />
        {/* breadcrumb area end */}

        <PlayTitle />

        <PlayGameOption />

        {/* send button at the bottom with 100% width*/}
        <div className="">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="text-center">
              <div
                className=" wow bounceInLeft"
                data-wow-delay=".6s"
              >
                <div className="tg-btn-3 tg-svg mx-auto mt-0 mb-5">
                  <SvgIconCom icon={"/assets/img/icons/shape.svg"} id="svg-1"/>
                  <span>Ennviar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
