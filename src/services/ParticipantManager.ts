import { EventManager } from './EventManager';
import { Participant } from '../models/Participant';

export class ParticipantManager {

  addParticipant(eventName: string, participant: Participant, eventManager: EventManager): boolean {
    const event = eventManager.getEvent(eventName);
    if (event) {
      event.participants.push(participant);
      return true;
    }
    return false; 
  }


  removeParticipant(eventName: string, participantId: number, eventManager: EventManager): boolean {
    const event = eventManager.getEvent(eventName);
    if (event) {
      const index = event.participants.findIndex(p => p.id === participantId);
      if (index !== -1) {
        event.participants.splice(index, 1);
        return true;
      }
    }
    return false;
  }


  getParticipantsForEvent(eventName: string, eventManager: EventManager): Participant[] | undefined {
    const event = eventManager.getEvent(eventName);
    if (event) {
      return event.participants;
    }
    return undefined;
  }


  getAllParticipants(eventManager: EventManager): Participant[] {
    return eventManager.getAllEvents().flatMap(event => event.participants);
  }
}