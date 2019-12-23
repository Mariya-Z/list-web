import { InjectionToken } from '@angular/core';

import { serviceFactory } from 'src/app/shared/factories/service.factory';
import { StorageService } from 'src/app/shared';

export const LANGUAGE_STORAGE_TOKEN = new InjectionToken(
  'LANGUAGE_STORAGE_TOKEN'
);

export const LanguageProvider = {
  provide: LANGUAGE_STORAGE_TOKEN,
  useFactory: serviceFactory(StorageService)
};

