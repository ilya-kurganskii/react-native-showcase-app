import 'reflect-metadata';
import { Container } from 'inversify';

import { RootStore } from '~features/app/stores/root/root.store';
import { FirebaseAuthService } from '~features/auth/services/firebase-auth-service';
import { AuthStore } from '~features/auth/stores/auth/auth.store';
import { LoggerService } from '~features/common/services/logger/logger.service';
import { I18nStore } from '~features/i18n/stores/i18n/i18n.store';

const container = new Container();

container
  .bind<FirebaseAuthService>(FirebaseAuthService)
  .toSelf()
  .inSingletonScope();
container.bind<RootStore>(RootStore).toSelf().inSingletonScope();
container.bind<LoggerService>(LoggerService).toSelf().inSingletonScope();
container.bind<AuthStore>(AuthStore).toSelf().inSingletonScope();
container.bind<I18nStore>(I18nStore).toSelf().inSingletonScope();

export { container };
