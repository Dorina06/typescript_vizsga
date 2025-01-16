import { Participant } from './Participant';

export interface Event {
  name: string;
  location: string;
  date: Date;
  participants: Participant[];
  theme: string;
}