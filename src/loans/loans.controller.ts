import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
    constructor(@Inject (LoansService) private loansService: LoansService) {}

    @Post()
    createLoan(@Body() createLoanDto:any){
        return "Loan Created";
    }
    
    @Get()
    getLoanStatus(@Param('id') id:string){
        return `Status of loan ${id}`
    }
}
