# innoQ Styleguide and Component Library

[![Build Status](https://travis-ci.org/innoq/innoq-styleguide.svg?branch=master)](https://travis-ci.org/innoq/innoq-styleguide)

## Without Docker

Install:

    yarn install

This starts a local development server complete with asset pipeline:

    yarn start

Export a static site to `./dist/site`

    yarn run site

## With Docker & Docker-Compose

    docker-compose up

## Deployment

Everything in master gets deployed automatically to
https://innoq.github.io/innoq-styleguide.

See `.travis.yml` for more info.

## Release

Just hit `ENTER` all the time to release a new version.

Travis deals with npm publishing, no need to answer
with "YES" here.

### Patch level version (auto increment)

    $ release-it

### Minor

    $ release-it minor

### Major

    $ release-it major
