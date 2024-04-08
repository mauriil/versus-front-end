

export interface ITournament {
  _id: string;
  entryPrice: number;
  title: string;
  subTitle: string;
  startDate: Date;
  endDate: Date;
  jackpot: number;
  status: string;
  image: string;
}