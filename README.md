<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

Note that a project scaffolded with the Nest CLI creates an initial project structure that encourages developers to follow the convention of keeping each module in its own dedicated directory.
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# E??itim

Program C C++ gibi dillerde oldu??u gibi main ??zerinden ba??l??yor.

* Main k??sm?? i??in : To create a Nest application instance, we use the core `NestFactory` class. `NestFactory` exposes a few static methods that allow creating an application instance. The `create()` method returns an application object, which fulfills the `INestApplication` interface. This object provides a set of methods which are described in the coming chapters. In the `main.ts` example above, we simply start up our HTTP listener, which lets the application await inbound HTTP requests.
* Program app.controller k??sm??nda ba??layarak ba??lang???? endpointinden get post ...vb istekleri kar????lamaktad??r.
* Ekstra controller eklemek i??in nest in kendi konsol komutlar??n?? kullanabiliriz

  ```
  ??? name          ??? alias       ??? description                                  ???
        ??? application   ??? application ??? Generate a new application workspace         ???
        ??? class         ??? cl          ??? Generate a new class                         ???
        ??? configuration ??? config      ??? Generate a CLI configuration file            ???
        ??? controller    ??? co          ??? Generate a controller declaration            ???
        ??? decorator     ??? d           ??? Generate a custom decorator                  ???
        ??? filter        ??? f           ??? Generate a filter declaration                ???
        ??? gateway       ??? ga          ??? Generate a gateway declaration               ???
        ??? guard         ??? gu          ??? Generate a guard declaration                 ???
        ??? interceptor   ??? itc         ??? Generate an interceptor declaration          ???
        ??? interface     ??? itf         ??? Generate an interface                        ???
        ??? middleware    ??? mi          ??? Generate a middleware declaration            ???
        ??? module        ??? mo          ??? Generate a module declaration                ???
        ??? pipe          ??? pi          ??? Generate a pipe declaration                  ???
        ??? provider      ??? pr          ??? Generate a provider declaration              ???
        ??? resolver      ??? r           ??? Generate a GraphQL resolver declaration      ???
        ??? service       ??? s           ??? Generate a service declaration               ???
        ??? library       ??? lib         ??? Generate a new library within a monorepo     ???
        ??? sub-app       ??? app         ??? Generate a new application within a monorepo ???
        ??? resource      ??? res         ??? Generate a new CRUD resource  

  ```

  * G??r??ld?????? ??zere "nest g mo user" komutu kullan??larak yeni bir controller olu??turulabilir. Bunun i??inde get post istekleri kar????lanabilir.
  * service dosyas??nda yap??lacka olan i??lemler tutulur.
    ```typescript
    cats.service.tsJS

    import { Injectable } from '@nestjs/common';
    import { Cat } from './interfaces/cat.interface';

    @Injectable()
    export class CatsService {
      private readonly cats: Cat[] = [];

      create(cat: Cat) {
        this.cats.push(cat);
      }

      findAll(): Cat[] {
        return this.cats;
      }
    }
    ```

Service dosyas?? olu??turulduktan sonra controller i??ine constructor olarak eklenir.

```typescript
cats.controller.tsJS

import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

* Module dosyas??na import edilecekelr eklenir en son module dosyas?? app??module e eklenerek programa ba??lanm???? olur.


### Module

* 4 Ana b??l??mden olu??ur
  * providers -> injectorler i??in kullan??r
  * controllers -> kontrol i??lemleri
  * import -> import i??lemleri
  * export -> D????ar??ya aktar??lacak export i??lemleri
* B??t??n moduller eklendinten sonra genel mod??l export edilerek app k??sm??na ba??lan??r.

```typescript
cats/cats.module.tsJS

import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

```typescript
app.module.tsJS

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```


### Decorator pattern

* Control i??indeki isteklerin kar????lanmas?? i??in yaz??lan i??lemler i??inde @Req @Res ...vb gibi i??lemlere genel olarak Decorator denir. Custom olarak yap??labilir.
  ```typescript
  user.decorator.tsJS

  import { createParamDecorator, ExecutionContext } from '@nestjs/common';

  export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      return request.user;
    },
  );
  ```

```typescript
@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}
```


### Middleware

* REST i??lemleri ??ncesi kontrol mekanizmas?? gibi ??al??????r. Gelen request incelenerek y??nlendirme yap??labilir.

```typescript
logger.middleware.tsJS

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```

nest mi < name > konsol komutu ile olu??turulabilir.

Ayr?? bir dosyas?? olmay??p app.module alt??nda i??lemler ger??ekle??tirilir. Genel dosya yap??s??.

```typescript
app.module.tsJS

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
```

```bash

forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
```

Wildcard i??lemi pathlerde oldu??u gibi middleware i??lemi i??inde de yap??labilir.

```typescript
app.module.tsJS

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}
```

forRoutes i??lemi string, stringler veya direk controller alarakta ??al????abilir.


###### Excluding routes[#](https://docs.nestjs.com/middleware#excluding-routes)

At times we want to **exclude** certain routes from having the middleware applied. We can easily exclude certain routes with the `exclude()` method. This method can take a single string, multiple strings, or a `RouteInfo` object identifying routes to be excluded, as shown below:

```typescript

consumer
  .apply(LoggerMiddleware)
  .exclude(
    { path: 'cats', method: RequestMethod.GET },
    { path: 'cats', method: RequestMethod.POST },
    'cats/(.*)',
  )
  .forRoutes(CatsController);
```

exclude kullan??larak belli ba??l?? methodlar ayr?? tutulabilir.


###### Multiple middleware[#](https://docs.nestjs.com/middleware#multiple-middleware)

As mentioned above, in order to bind multiple middleware that are executed sequentially, simply provide a comma separated list inside the `apply()` method:

```typescript

consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
```

Birden fazla middleware fonksiyonu kullan??labilir.


### Pipes

Parse i??lemleri i??in kullan??l??r.

```typescript
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}
```

Number bekledi??inden dolay?? "abc" gibi bir girdi olursa hata d??necektir.

```json
{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}
```

###### Custom pipe

```typescript
validation.pipe.tsJS

import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
```

Custom pipe yap??larak kullan??labilir.


###### Schema based validation[#](https://docs.nestjs.com/pipes#schema-based-validation)

Let's make our validation pipe a little more useful. Take a closer look at the `create()` method of the `CatsController`, where we probably would like to ensure that the post body object is valid before attempting to run our service method.

**JS**

```typescript

@Post()
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

Let's focus in on the `createCatDto` body parameter. Its type is `CreateCatDto`:

create-cat.dto.ts**JS**

```typescript

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
```

Kendi ??emam??z?? olu??turarak validation i??lemlerini ger??ekle??tirebiliriz.

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
```


###### Binding validation pipes[#](https://docs.nestjs.com/pipes#binding-validation-pipes)

Earlier, we saw how to bind transformation pipes (like `ParseIntPipe` and the rest of the `Parse*` pipes).

Binding validation pipes is also very straightforward.

In this case, we want to bind the pipe at the method call level. In our current example, we need to do the following to use the `JoiValidationPipe`:

1. Create an instance of the `JoiValidationPipe`
2. Pass the context-specific Joi schema in the class constructor of the pipe
3. Bind the pipe to the method

Joi schema example:

```typescript

const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
})

export interface CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
```

Joi kullan??larak gelen datan??n required olmas?? gerekti??i yada number veya string olmas?? gerekti??i gibi validation i??lemleri yap??labilir.

```typescript
@Post()
@UsePipes(new JoiValidationPipe(createCatSchema))
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```


###### Class validator[#](https://docs.nestjs.com/pipes#class-validator)

> **WARNING**The techniques in this section require TypeScript, and are not available if your app is written using vanilla JavaScript.

Let's look at an alternate implementation for our validation technique.

Nest works well with the [class-validator](https://github.com/typestack/class-validator) library. This powerful library allows you to use decorator-based validation. Decorator-based validation is extremely powerful, especially when combined with Nest's **Pipe** capabilities since we have access to the `metatype` of the processed property. Before we start, we need to install the required packages:

```bash

$ npm i --save class-validator class-transformer
```

Once these are installed, we can add a few decorators to the `CreateCatDto` class. Here we see a significant advantage of this technique: the `CreateCatDto` class remains the single source of truth for our Post body object (rather than having to create a separate validation class).

create-cat.dto.ts**JS**

```typescript

import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
```


**validation.pipe.ts****JS**

```typescript

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
```


**main.ts****JS**

```typescript

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

Global validate eklenebilir.


### Guard

Middleware i??lemi kullan??labilir fakat sonras?? i??in hangisinin kullan??ca????n?? bilmedi??inden burada patl??yor.

*But middleware, by its nature, is dumb. It doesn't know which handler will be executed after calling the `next()` function*

**HINT**Guards are executed **after** all middleware, but **before** any interceptor or pipe.*


###### Authorization guard[#](https://docs.nestjs.com/guards#authorization-guard)

As mentioned, **authorization** is a great use case for Guards because specific routes should be available only when the caller (usually a specific authenticated user) has sufficient permissions. The `AuthGuard` that we'll build now assumes an authenticated user (and that, therefore, a token is attached to the request headers). It will extract and validate the token, and use the extracted information to determine whether the request can proceed or not.

auth.guard.ts**JS**

```typescript

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```
