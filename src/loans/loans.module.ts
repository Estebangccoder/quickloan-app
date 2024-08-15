import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';

@Module({
    //imports: [TypeOrmModule.forFeature([Loans])

  controllers: [LoansController],
    providers: [LoansService]
})
export class LoansModule {

}
