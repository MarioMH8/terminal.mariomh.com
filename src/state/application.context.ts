import { createContext, useContext } from 'react';

import type { ApplicationState } from './application.state';

export const ApplicationContext = createContext<ApplicationState>({} as ApplicationState);
export const useApplicationContext = (): ApplicationState => useContext(ApplicationContext);
