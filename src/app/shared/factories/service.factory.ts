export const serviceFactory = <T>(service: new (...deps) => T) => (
  ...deps: any[]
) => new service(...deps);
