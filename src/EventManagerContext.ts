import { createContext } from "react";
import { EventManagerType } from "./createEventManager";

export const EventManager = createContext<EventManagerType | undefined>(
  undefined
);
EventManager.displayName = "EventManager";
