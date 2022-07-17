import { Module } from '@nestjs/common';
import { HttpModule } from './app/http/http.module';

@Module({
  imports: [HttpModule],
})
export class AppModule {}
