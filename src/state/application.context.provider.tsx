import type { FC, ReactElement } from 'react';
import React from 'react';

import { ApplicationContext } from './application.context';
import { useApplicationState } from './application.state';

export interface ApplicationContextProviderProps {
	children: React.JSX.Element;
}

export const ApplicationProvider: FC<ApplicationContextProviderProps> = ({
	children,
}: ApplicationContextProviderProps): ReactElement => {
	const state = useApplicationState();

	return (
		<ApplicationContext.Provider value={{ ...state }}>{children}</ApplicationContext.Provider>
	);
};
