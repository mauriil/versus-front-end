import Wrapper from "../layout/wrapper";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import TeamInfoArea from "../components/team/team-info-area";
import TeamInfoArea2 from "../components/team/team-info-area-2";
import SEOCom from "../components/seo";


export default function TeamDetailsPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Team Details" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea
          title="PERFIL DE JUGADOR"
          subtitle="PERFIL DE JUGADOR"
          bg="/assets/img/bg/breadcrumb_bg01.jpg"
          brd_img="/assets/img/team/breadcrumb_team.png"
        />
        {/* breadcrumb area end */}

        {/* team info start */}
        <TeamInfoArea />
        {/* team info end */}

        <TeamInfoArea2 />

        {/*  */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
