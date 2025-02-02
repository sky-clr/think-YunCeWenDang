import { StarController } from '@controllers/star.controller';
import { StarEntity } from '@entities/star.entity';
import { DocumentModule } from '@modules/document.module';
import { UserModule } from '@modules/user.module';
import { WikiModule } from '@modules/wiki.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarService } from '@services/star.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StarEntity]),
    forwardRef(() => UserModule),
    forwardRef(() => WikiModule),
    forwardRef(() => DocumentModule),
  ],
  providers: [StarService],
  exports: [StarService],
  controllers: [StarController],
})
export class StarModule {}
