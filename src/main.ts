import 'reflect-metadata';
import { AppModule } from './app.module';
import { bootstrapService } from './chassis';

// Error a propósito para demostrar el punto de corte del CI: ESLint rechaza variables sin usar.
const variableSinUsar = 'esta variable no se usa';

void bootstrapService(AppModule, { name: 'league-service', defaultPort: 4002 });
