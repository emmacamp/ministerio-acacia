export interface Event {
  type: string;
  location: string;
  date: {
    from?: string;
    to?: string;
    month?: string;
  };
  title: string;
  willDo: string;
  description: string;
}
