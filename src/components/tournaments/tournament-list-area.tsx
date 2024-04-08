import { NavLink } from "react-router-dom";
import tournament_data from "../../data/tournament-data";
import TournamentListItem from "./tournament-list-item";
import { useEffect, useState } from "react";
import { getEvents } from "../../api/events";

const TournamentListArea = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const fetchEvents = async () => {
    try {
      const response = await getEvents(3, page);
      setEvents(response);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <section
      className="tournament__list-area section-pb-120 section-pt-120"
      style={{ backgroundImage: `url(/assets/img/bg/tournament_bg.jpg)` }}
    >
      <div className="container">
        <div className="tournament__wrapper">
          <div className="row align-items-end mb-60">
            <div className="col-lg-8">
              <div className="section__title text-center text-lg-start title-shape-none">
                <span className="sub-title tg__animate-text">
                  Lista de eventos
                </span>
                <h3 className="title">Eventos activos</h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section__title-link">
                <NavLink to="/tournament">VER MÁS</NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tournament__list-item-wrapper">
                {events.map((item, i) => (
                  <TournamentListItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentListArea;
