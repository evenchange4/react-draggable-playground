# react-draggable-playground

> Reusable React-draggable components with render props.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devdependency-badge]][devdependency]
[![peerDependency Status][peerdependency-badge]][peerdependency]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add react-draggable-playground
```

## Demo

* https://react-draggable-playground.netlify.com/

## Usage

```js
import { DraggableParent, DraggableItem } from 'react-draggable-playground';

<DraggableParent height={300} width={300}>
  <DraggableItem
    defaultPosition={{ x: 100, y: 100 }}
    onPositionChange={(position: Position) => {}}
  >
    {({ isDragging }) => <div>item</div>}
  </DraggableItem>
</DraggableParent>;
```

## API

```js
type Position = {
  x: number,
  y: number,
};

// DraggableItem
type Props = {
  children: ({ isDragging: boolean, disabled: boolean }) => React.Node,
  disabled: boolean,
  onPositionChange?: Position => Promise<void> | void,
  defaultPosition?: Position,
};

// DraggableParent
type Props = {
  height: number,
  width: number,
  children?: React.Node,
  style?: Object,
};
```

## Development

### Requirements

* node >= 9.8.0
* yarn >= 1.5.1

```sh
$ yarn install --pure-lockfile
$ yarn start
```

## Test

```sh
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
$ yarn run build
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/react-draggable-playground/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-draggable-playground
[npm-badge]: https://img.shields.io/npm/v/react-draggable-playground.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-draggable-playground
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-draggable-playground.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-draggable-playground?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/react-draggable-playground.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-draggable-playground.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[dependency-badge]: https://david-dm.org/evenchange4/react-draggable-playground.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-draggable-playground
[devdependency-badge]: https://david-dm.org/evenchange4/react-draggable-playground/dev-status.svg?style=flat-square
[devdependency]: https://david-dm.org/evenchange4/react-draggable-playground#info=devDependencies
[peerdependency-badge]: https://david-dm.org/evenchange4/react-draggable-playground/peer-status.svg?style=flat-square
[peerdependency]: https://david-dm.org/evenchange4/react-draggable-playground#info=peerDependencies
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
