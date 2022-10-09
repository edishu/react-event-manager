export interface EventManagerType {
  events: Record<string, Array<Function>>;
  on: Function;
  emit: Function;
}

export const createEventManager = (): EventManagerType => {
  const eventManager: EventManagerType = {
    events: {},
    on: (type: string, event: Function) => {
      if (eventManager.events[type]) {
        eventManager.events[type].push(event);
      } else {
        eventManager.events[type] = [event];
      }
    },
    emit: (type: string, data: any) => {
      eventManager.events[type].forEach((event) => {
        event(data);
      });
    },
  };
  return Object.freeze(eventManager);
};
