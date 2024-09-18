import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LocationsModule } from './locations/locations.module';
import { Location } from './locations/entities/location.entity';

@Module({
  imports: [TypeOrmModule
    
    .forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Atharva@123',
    database: 'ConnetingNestJs',
    entities: [Location],
    synchronize: false,
  }), UsersModule, LocationsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
