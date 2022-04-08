export interface IRace {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitName: string;
    Location: {
      country: string;
    };
  };
  date: string;
}
