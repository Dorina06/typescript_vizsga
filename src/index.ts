import { EventManager } from './services/EventManager';
import { ParticipantManager } from './services/ParticipantManager';
import { ThemeGrouping } from './services/ThemeGrouping';
import { Participant } from './models/Participant';

const themeGrouping = new ThemeGrouping();
const eventManager = new EventManager();
const participantManager = new ParticipantManager();


const event1 = eventManager.createEvent('Tech Conference', 'Budapest', new Date('2025-05-01'), 'Technology');
console.log(event1);

const event2 = eventManager.createEvent('Music Fest', 'Debrecen', new Date('2025-06-01'), 'Music');
console.log(event2);

const event3 = eventManager.createEvent('Food Expo', 'Budapest', new Date('2025-05-15'), 'Food');
console.log(event3);


const participant1: Participant = { id: 1, name: 'John Doe', email: 'john@example.com' };
participantManager.addParticipant('Tech Conference', participant1, eventManager);


const groupedByTheme = themeGrouping.groupEventsByTheme(eventManager.getAllEvents());
console.log(groupedByTheme);


const groupedByLocation = themeGrouping.groupEventsByLocation(eventManager.getAllEvents());
console.log(groupedByLocation);


const groupedByDate = themeGrouping.groupEventsByDate(eventManager.getAllEvents());
console.log(groupedByDate);


const uniqueThemes = themeGrouping.getUniqueThemes(eventManager.getAllEvents());
console.log(uniqueThemes);