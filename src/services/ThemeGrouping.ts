import { Event } from '../models/Event';

export class ThemeGrouping {

  groupEventsByTheme(events: Event[]): Record<string, Event[]> {
    return events.reduce((acc, event) => {
      if (!acc[event.theme]) {
        acc[event.theme] = [];
      }
      acc[event.theme].push(event);
      return acc;
    }, {} as Record<string, Event[]>);
  }


  groupEventsByLocation(events: Event[]): Record<string, Event[]> {
    return events.reduce((acc, event) => {
      if (!acc[event.location]) {
        acc[event.location] = [];
      }
      acc[event.location].push(event);
      return acc;
    }, {} as Record<string, Event[]>);
  }


  groupEventsByDate(events: Event[]): Record<string, Event[]> {
    return events.reduce((acc, event) => {
      const eventDate = event.date.toDateString();
      if (!acc[eventDate]) {
        acc[eventDate] = [];
      }
      acc[eventDate].push(event);
      return acc;
    }, {} as Record<string, Event[]>);
  }


  getUniqueThemes(events: Event[]): string[] {
    const themes = events.map(event => event.theme);
    return Array.from(new Set(themes));
  }
}