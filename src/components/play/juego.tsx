import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

const game_1 = {
  id: 1,
  home: {
    id: 10,
    img: '/assets/img/team/river.png',
    title: 'River Plate'
  },
  away: {
    id: 3,
    img: '/assets/img/team/racing.png',
    title: 'Racing club'
  },
  time: "Domingo 15 - 17:00 hs"
}
const game_2 = {
  id: 2,
  home: {
    id: 21,
    img: '/assets/img/team/boca.png',
    title: 'Boca Juniors'
  },
  away: {
    id: 32,
    img: '/assets/img/team/independiente.png',
    title: 'Independiente'
  },
  time: "Domingo 15 - 20:00 hs"
}

const games = [game_1, game_2];

// slider setting
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    '1500': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 3,
    },
    '0': {
      slidesPerView: 3,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  }
};

const PlayGameOption = ({ game, handleOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    handleOptionSelect(game.id, optionId);
  };

  return (
    <div className="game-container mt-5">
      <div className="text-center">
        <h3 className="title">{game.time}</h3>
      </div>
      <Swiper {...slider_setting} modules={[Navigation, Pagination]} className="swiper-container streamers-active">
        <SwiperSlide
          key={game.home.id}
          className={selectedOption === game.home.id ? "selected" : ""}
          onClick={() => handleOptionClick(game.home.id)}
        >
          <div className="streamers__item">
            <div className="streamers__thumb">
              <img src={game.home.img} alt="img" height='200px' width='100px' />
            </div>
            <div className="streamers__content">
              <h4 className="name">{game.home.title}</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          key={game.id}
          className={selectedOption === null ? "selected" : ""}
          onClick={() => handleOptionClick(null)}
        >
          <div className="streamers__item">
            <div className="streamers__thumb">
              <img src='/assets/img/team/tie.png' alt="img" height='200px' width='100px' />
            </div>
            <div className="streamers__content">
              <h4 className="name">Empate</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          key={game.away.id}
          className={selectedOption === game.away.id ? "selected" : ""}
          onClick={() => handleOptionClick(game.away.id)}
        >
          <div className="streamers__item">
            <div className="streamers__thumb">
              <img src={game.away.img} alt="img" height='200px' width='100px' />
            </div>
            <div className="streamers__content">
              <h4 className="name">{game.away.title}</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const PlayGameOptionList = () => {
  const [gameTicket, setGameTicket] = useState([]);

  const handleOptionSelect = (gameId, optionId) => {
    // check if game is already in ticket
    const gameIndex = gameTicket.findIndex((game) => game.id === gameId);
    // if game is not in ticket, add it
    if (gameIndex === -1) {
      const newGame = {
        id: gameId,
        selectedOption: optionId
      };
      setGameTicket([...gameTicket, newGame]);
      return;
    } else {
      // if game is in ticket, update option
      const updatedTicket = [...gameTicket];
      updatedTicket[gameIndex] = { ...updatedTicket[gameIndex], selectedOption: optionId };
      setGameTicket(updatedTicket);
    }
  };
  console.log("🚀 ~ PlayGameOptionList ~ gameTicket:", gameTicket)

  return (
    <section className="streamers__area section-pb-120">
      <div className="container">
        {games.map((game) => (
          <PlayGameOption key={game.id} game={game} handleOptionSelect={handleOptionSelect} />
        ))}
      </div>
    </section>
  );
};

export default PlayGameOptionList;