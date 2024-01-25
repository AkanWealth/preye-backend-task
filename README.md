<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

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
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


Copy code
# preyellc-backend

[Short description or tagline for your project.]

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependency Injection](#dependency-injection)
- [Middleware](#middleware)
- [Interceptors](#interceptors)
- [Guards](#guards)
- [Exception Filters](#exception-filters)
- [WebSockets](#websockets)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

[Provide a brief introduction to your project, its purpose, and why NestJS was chosen as the framework.]

## Installation

To install the project, use the following command:

```bash
npm install
Getting Started
[Provide basic steps to create and run the project. Include example code for creating a simple module or controller.]

Usage
[Explain how to structure your NestJS application, including modules, controllers, and services. Provide examples of decorators such as @Module, @Controller, and @Injectable.]

Configuration
[Guide on how to configure the NestJS application. Include information on configuration files or environment variables.]

Dependency Injection
[Explain how dependency injection works in NestJS and use the @Inject decorator.]

Middleware
[Cover the use of middleware for processing requests. Include examples of built-in middleware and how to create custom middleware.]

Interceptors
[Provide guidance on using interceptors for manipulating the input/output of controllers. Include examples of logging, caching, or modifying response structures.]

Guards
[Explain how to create guards to control access to routes. Include examples of authentication guards.]

Exception Filters
[Guide on handling exceptions and errors in NestJS. Include information on custom exception filters.]

WebSockets
[If applicable, provide information on using WebSocket technology in NestJS.]

Testing
[Guide on writing tests for NestJS applications. Include the use of testing modules, controllers, and services.]

Jest Configuration
json
Copy code
// jest.config.js
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "src",
  "testRegex": ".*\\.spec\\.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": ["**/*.(t|j)s"],
  "coverageDirectory": "../coverage",
  "testEnvironment": "node"
}
Deployment
[Tips or recommendations for deploying NestJS applications. Include any specific considerations for various hosting environments.]

Contributing
[Information on how to contribute to the project. Include guidelines for submitting issues or pull requests.]

License
[Specify the license under which the project is distributed.]

Package.json
json
Copy code
{
  "name": "preyellc-backend",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    // ... (Include your existing scripts here)
  },
  "dependencies": {
    // ... (Include your existing dependencies here)
  },
  "devDependencies": {
    // ... (Include your existing devDependencies here)
  },
  "jest": {
    // ... (Include your existing Jest configuration here)
  }
}
[Include any additional information about your package.json file, such as notable dependencies, scripts, or configuration settings.]

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# preye-client
