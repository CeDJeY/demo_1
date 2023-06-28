import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ReportsService } from '@services/reports';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [ReportsService],
})
export class AppModule {}
