import { NavLink } from "react-router-dom";
import SvgIconCom from "../common/svg-icon-anim";

// match type
type IMatch = {
  team_1: string;
  game_name_1: string;
  game_name_2: string;
  time: string;
  match_name: string;
  date: string;
  team_2: string;
  match_name_2: string;
  delay: string;
};

const StatusOfSeason = () => {
  function UpcomingMatchItem({
    team_1,
    team_2,
    game_name_1,
    game_name_2,
    time,
    match_name,
    date,
    match_name_2,
    delay,
  }: IMatch) {
    return (
      <div
        className="upcoming-match__item tg-svg wow fadeInUp"
        data-wow-delay={`${delay}s`}
      >
        <SvgIconCom icon="/assets/img/icons/match.svg" id="svg-7" />
        <div className="upcoming-match__position">
          <div className="upcoming-match__team team-left">
            <NavLink to="/team-details">
              <img src={team_1} alt="img" />
            </NavLink>
          </div>
          <div className="upcoming-match__content">
            <div className="team--info info-left">
              <span className="game-name">{game_name_1}</span>
              <h3 className="name">
                <NavLink to="/team-details">{match_name}</NavLink>
              </h3>
            </div>
            <div className="upcoming-match__time">
              <h2 className="time">{time}</h2>
            </div>
            <div className="team--info info-right">
              <span className="game-name">{game_name_2}</span>
              <h3 className="name">
                <NavLink to="/team-details">{match_name_2}</NavLink>
              </h3>
            </div>
          </div>
          <div className="upcoming-match__team team-right">
            <NavLink to="/team-details">
              <img src={team_2} alt="img" />
            </NavLink>
          </div>
        </div>
        <div className="upcoming-match__date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="287"
            height="24"
            viewBox="0 0 287 24"
          >
            <path
              id="bottom-svg1"
              d="M1104,3760l-20,24H837l-20-24"
              transform="translate(-817 -3760)"
            />
          </svg>
          <span>{date}</span>
        </div>
      </div>
    );
  }

  return (
    <section className="streamers__area section-pb-120">
      <div className="container">
      <div className="row">
          <div className="col-12">
            <div className="upcoming-match__lists">
              <UpcomingMatchItem
                date="OCTOBER 7, 2023, 8:30 PM"
                team_1="/assets/img/others/team_vs01.png"
                team_2="/assets/img/others/team_vs02.png"
                time="0 : 0"
                game_name_1="dota2"
                match_name="sky hunter"
                match_name_2="The Tadium"
                game_name_2="dota2"
                delay=".2"
              />

              <UpcomingMatchItem
                date="October 9, 2023, 5:30 pm"
                team_1="/assets/img/others/team_vs03.png"
                team_2="/assets/img/others/team_vs04.png"
                time="3 : 1"
                game_name_1="valorant"
                match_name="killer 7"
                match_name_2="Black mx"
                game_name_2="valorant"
                delay=".4"
              />

              <UpcomingMatchItem
                date="October 10, 2023, 9:30 pm"
                team_1="/assets/img/others/team_vs05.png"
                team_2="/assets/img/others/team_vs06.png"
                time="2 : 3"
                game_name_1="PUBG PC"
                match_name="killer 7"
                match_name_2="Black mx"
                game_name_2="PUBG PC"
                delay=".6"
              />

              <UpcomingMatchItem
                date="(EN CURSO)"
                team_1="/assets/img/others/team_vs03.png"
                team_2="/assets/img/others/team_vs04.png"
                time="1 : 1"
                game_name_1="valorant"
                match_name="killer 7"
                match_name_2="Black mx"
                game_name_2="valorant"
                delay=".4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusOfSeason;