import { EventManager } from '../services/EventManager';


describe('EventManager', () => {
  let eventManager: EventManager;

  beforeEach(() => {
    eventManager = new EventManager();
  });

  it('should create a new event', () => {
    const event = eventManager.createEvent('Tech Conference', 'Budapest', new Date('2025-05-01'), 'Technology');
    expect(event.name).toBe('Tech Conference');
    expect(event.location).toBe('Budapest');
  });

  it('should retrieve an event by name', () => {
    eventManager.createEvent('Tech Conference', 'Budapest', new Date('2025-05-01'), 'Technology');
    const event = eventManager.getEvent('Tech Conference');
    expect(event).toBeDefined();
    expect(event?.name).toBe('Tech Conference');
  });

  it('should return undefined if event does not exist', () => {
    const event = eventManager.getEvent('Nonexistent Event');
    expect(event).toBeUndefined();
  });
});