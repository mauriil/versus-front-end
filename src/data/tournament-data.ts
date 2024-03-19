import { ITournament } from '../types/tournament-type';

const tournament_data:ITournament[] = [
  {
    id:1,
    thumb:'/assets/img/cupsLogo/CopaArg_2024.png',
    box_price:1000,
    coming_time:'2025-10-25',
    subtitle:'Copa Arg  - Fecha 3',
    title:'Copa Argentina',
    places:30000,
    live_link:'/play/123',
    team_name:'FoxTie Max',
    status:'En curso',
    list_items:[
      {
        id:1,
        img:'/assets/img/others/tournament01.jpg',
        name:'black ninja',
        price:75000
      },
      {
        id:2,
        img:'/assets/img/others/tournament02.jpg',
        name:'Foxtie Max',
        price:75000
      },
      {
        id:3,
        img:'/assets/img/others/tournament03.jpg',
        name:'Holam Doxe',
        price:75000
      },
    ]
  },
  {
    id:2,
    thumb:'/assets/img/leaguesLogos/lpf_afa.png',
    active:true,
    box_price:1000,
    coming_time:'2024-03-20T07:00:00Z',
    subtitle:'LPF - Fecha 11',
    title:'LPF',
    places:10000,
    live_link:'/status/123',
    team_name:'Hatlax TM.',
    status:'Comenzado',
    list_items:[
      {
        id:1,
        img:'/assets/img/others/tournament01.jpg',
        name:'black ninja',
        price:75000
      },
      {
        id:2,
        img:'/assets/img/others/tournament02.jpg',
        name:'Foxtie Max',
        price:75000
      },
      {
        id:3,
        img:'/assets/img/others/tournament03.jpg',
        name:'Holam Doxe',
        price:75000
      },
    ]
  },
  {
    id:3,
    thumb:'/assets/img/leaguesLogos/serie-a-italia.png',
    box_price:1000,
    coming_time:'2025-9-28',
    subtitle:'Serie A - Fecha 8',
    title:'Serie A',
    places:50000,
    live_link:'/play/123',
    team_name:'Spartan iv',
    status:'En curso',
    list_items:[
      {
        id:1,
        img:'/assets/img/others/tournament01.jpg',
        name:'black ninja',
        price:75000
      },
      {
        id:2,
        img:'/assets/img/others/tournament02.jpg',
        name:'Foxtie Max',
        price:75000
      },
      {
        id:3,
        img:'/assets/img/others/tournament03.jpg',
        name:'Holam Doxe',
        price:75000
      },
    ]
  },
]


export default tournament_data;