import React, { ReactNode, createContext, useContext, useMemo } from 'react';

export type Config = { [k: string]: string };

export type AppConfig = Readonly<Config>;

console.log('create appConfigContext');
const appConfigContext = createContext<AppConfig | undefined>(undefined);

export function useAppConfig() {
  console.log('useAppConfig', appConfigContext);

  const appConfig = useContext(appConfigContext);
  if (!appConfig) {
    throw new Error(
      'appConfigContext value is undefined. Make sure you use the AppConfigProvider before using the context.'
    );
  }
  return appConfig;
}

type Props = {
  children: ReactNode;
  params: Config;
};

export function AppConfigProvider(props: Props) {
  const { children, params = {} } = props;

  console.log('AppConfigProvider', params);

  const appConfig = useMemo(() => {
    return Object.freeze(params);
  }, [params]);

  const { Provider } = appConfigContext;
  return <Provider value={appConfig}>{children}</Provider>;
}
