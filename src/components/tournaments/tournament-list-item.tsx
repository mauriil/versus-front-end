import { useTimer } from "react-timer-hook";
import { NavLink } from "react-router-dom";
import { ITournament } from "../../types/tournament-type";
import TournamentBgPath from "../svg/t-list-bg";

// prop type
type IProp = {
  item: ITournament;
  index: number;
};
const TournamentListItem = ({ item, index }: IProp) => {
  const expiryTimestamp = new Date(item.coming_time);
  const { seconds, minutes, hours } = useTimer({ expiryTimestamp });
  return (
    <div
      className="tournament__list-item wow fadeInUp"
      data-wow-delay={`.${index + 2}s`}
    >
      <TournamentBgPath />
      <div className="tournament__list-content">
        <div className="tournament__list-thumb">
          <NavLink to="/tournament-details">
            <img
              src={item.thumb}
              alt="thumb"
            />
          </NavLink>
        </div>
        <div className="tournament__list-name">
          <h5 className="team-name">{item.subtitle}</h5>
          <span className="status">{item.status}</span>
        </div>
        <div className="tournament__list-prize">
          <h6 className="title">Pozo acumulado</h6>
          <i className="fas fa-trophy"></i>
          <span>${item.places}</span>
        </div>
        <div className="tournament__list-time">
          <h6 className="title">Tiempo restante</h6>
          <i className="fas fa-clock"></i>
          <span>{hours}h : {minutes}m : {seconds}s</span>
        </div>
        <div className="tournament__list-live">
          <NavLink to={item.live_link} target="_blank">
            {item.status === 'Comenzado' ? 'Resultados' : 'Participar'} <i className="far fa-arrow-alt-circle-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TournamentListItem;
