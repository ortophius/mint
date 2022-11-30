import { createContext } from "react";

export type Effect = () => Promise<unknown>;
export const EffectsContext = createContext<Effect[]>([]);
