import { createContext } from "react";

// Interface defining the shape of the client authentication state
export interface IClientStateContext {
  isAuthenticated: boolean; 
  client?: string; 
  isPending: boolean; 
  isSuccess: boolean; 
  isError: boolean; 
}


export interface IClientActionContext {
  login: (client: string) => void;
  logout: () => void; // 
}

// Initial authentication state for the client
export const INITIAL_CLIENT_STATE: IClientStateContext = {
  isAuthenticated: false,
  isPending: false,
  isSuccess: false,
  isError: false,
};


// ClientStateContext - Holds the current client authentication state
export const ClientStateContext = createContext<IClientStateContext>(INITIAL_CLIENT_STATE);

// ClientActionContext - Holds the authentication action methods for the client
export const ClientActionContext = createContext<IClientActionContext | undefined>(undefined);