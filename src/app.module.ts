import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module.js';
import { Student } from './students/entities/student.entity.js';
import { TeachersModule } from './teachers/teachers.module.js';
import { ClassesModule } from './classes/classes.module.js';
import { AssignmentsModule } from './assignments/assignments.module.js';
import { SentencesModule } from './sentences/sentences.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentsModule,
    TeachersModule,
    ClassesModule,
    AssignmentsModule,
    SentencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
