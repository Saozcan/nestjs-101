import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UserController {

  @Get()
  getUsers(): string {
    return 'Ahmedim';
  }

  @Get('/data')
  getData(): string {
    return 'blabla';
  }

  @Get('/data2')
  getData2(): string {
    return 'blabla';
  }

  @Get('req')
  getRequest(@Req() req: Request): string {
    //console.log('req', req.method);
    return 'req';
  }

  @Get('res')
  getResponse(@Res() res: Response): any {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.json({
      id: 1,
      name: 'Ahmet',
    });
  }

  @Get('query')
  getQuery(@Query('id') id, @Query('name') name, @Query('lastname') lastname) {
    console.log(id, name, lastname);
  }

  @Get(':id')
  getID(@Param() params): string {
    console.log(params);
    return `${params.id} numarali kullanici`;
  }

  @Post()
  createUser(@Body() data: { id: number; name: string }): string {
    console.log(data);
    return `${JSON.stringify(data)}`;
  }
}
