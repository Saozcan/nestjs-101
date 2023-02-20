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

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

Note that a project scaffolded with the Nest CLI creates an initial project structure that encourages developers to follow the convention of keeping each module in its own dedicated directory.
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Eğitim

Program C C++ gibi dillerde olduğu gibi main üzerinden başlıyor.

* Main kısmı için : To create a Nest application instance, we use the core `NestFactory` class. `NestFactory` exposes a few static methods that allow creating an application instance. The `create()` method returns an application object, which fulfills the `INestApplication` interface. This object provides a set of methods which are described in the coming chapters. In the `main.ts` example above, we simply start up our HTTP listener, which lets the application await inbound HTTP requests.
* Program app.controller kısmında başlayarak başlangıç endpointinden get post ...vb istekleri karşılamaktadır.
* Ekstra controller eklemek için nest in kendi konsol komutlarını kullanabiliriz

  ```
  │ name          │ alias       │ description                                  │
        │ application   │ application │ Generate a new application workspace         │
        │ class         │ cl          │ Generate a new class                         │
        │ configuration │ config      │ Generate a CLI configuration file            │
        │ controller    │ co          │ Generate a controller declaration            │
        │ decorator     │ d           │ Generate a custom decorator                  │
        │ filter        │ f           │ Generate a filter declaration                │
        │ gateway       │ ga          │ Generate a gateway declaration               │
        │ guard         │ gu          │ Generate a guard declaration                 │
        │ interceptor   │ itc         │ Generate an interceptor declaration          │
        │ interface     │ itf         │ Generate an interface                        │
        │ middleware    │ mi          │ Generate a middleware declaration            │
        │ module        │ mo          │ Generate a module declaration                │
        │ pipe          │ pi          │ Generate a pipe declaration                  │
        │ provider      │ pr          │ Generate a provider declaration              │
        │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
        │ service       │ s           │ Generate a service declaration               │
        │ library       │ lib         │ Generate a new library within a monorepo     │
        │ sub-app       │ app         │ Generate a new application within a monorepo │
        │ resource      │ res         │ Generate a new CRUD resource  

  ```

  * Görüldüğü üzere "nest g mo user" komutu kullanılarak yeni bir controller oluşturulabilir. Bunun içinde get post istekleri karşılanabilir.
  * service dosyasında yapılacka olan işlemler tutulur.
    ```bash
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

Service dosyası oluşturulduktan sonra controller içine constructor olarak eklenir.

```bash
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

* Module dosyasına import edilecekelr eklenir en son module dosyası appçmodule e eklenerek programa bağlanmış olur.


### Module

* 4 Ana bölümden oluşur
  * providers -> injectorler için kullanır
  * controllers -> kontrol işlemleri
  * import -> import işlemleri
  * export -> Dışarıya aktarılacak export işlemleri
* Bütün moduller eklendinten sonra genel modül export edilerek app kısmına bağlanır.

```bash
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

```bash
app.module.tsJS

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```


### Decorator pattern

* Control içindeki isteklerin karşılanması için yazılan işlemler içinde @Req @Res ...vb gibi işlemlere genel olarak Decorator denir. Custom olarak yapılabilir.
  ```bash
  user.decorator.tsJS

  import { createParamDecorator, ExecutionContext } from '@nestjs/common';

  export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      return request.user;
    },
  );
  ```

```bash
@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}

```
