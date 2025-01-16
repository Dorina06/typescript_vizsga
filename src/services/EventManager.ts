import { Event } from '../models/Event';


export class EventManager {
  private events: Event[] = [];

 
  createEvent(name: string, location: string, date: Date, theme: string): Event {
    const newEvent: Event = {
      name,
      location,
      date,
      participants: [],
      theme
    };
    this.events.push(newEvent);
    return newEvent;
  }


  editEvent(name: string, updatedInfo: Partial<Event>): Event | undefined {
    const event = this.events.find(e => e.name === name);
    if (event) {
      Object.assign(event, updatedInfo);
      return event;
    }
    return undefined;
  }


  deleteEvent(name: string): boolean {
    const index = this.events.findIndex(e => e.name === name);
    if (index !== -1) {
      this.events.splice(index, 1);
      return true;
    }
    return false;
  }


  getEvent(name: string): Event | undefined {
    return this.events.find(e => e.name === name);
  }


  getAllEvents(): Event[] {
    return this.events;
  }


  getEventsByDate(date: Date): Event[] {
    return this.events.filter(event => event.date.toDateString() === date.toDateString());
  }


  getEventsByTheme(theme: string): Event[] {
    return this.events.filter(event => event.theme.toLowerCase() === theme.toLowerCase());
  }
}