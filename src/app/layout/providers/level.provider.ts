import { InjectionToken, FactoryProvider } from '@angular/core';

import { serviceFactory } from 'src/app/shared/factories/service.factory';
import { StorageService } from 'src/app/shared';

export const LEVEL_STORAGE_TOKEN = new InjectionToken(
  'LEVEL_STORAGE_TOKEN'
);

export const LevelProvider: FactoryProvider = {
  provide: LEVEL_STORAGE_TOKEN,
  useFactory: serviceFactory(StorageService)
};

