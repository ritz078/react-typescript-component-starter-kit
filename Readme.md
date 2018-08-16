# react-typescript-component-starter-kit

> A React component starter kit written in Typescript using the power of Babel 7 and Webpack 4.

#### There are already so many starter kits. Why this?

> Yes, I am already aware of those but setting up Babel 7 with storybook and typescript was not that straightforward 😥. This repo is mainly for that. Other things are just extras which I use personally.

### Features

- [Typescript](https://www.typescriptlang.org/)
- [emotion](https://emotion.sh/)
- [Babel](https://babeljs.io/) 7
- [Webpack](https://webpack.js.org/) 4
- [Storybook](https://storybook.js.org/) (full of addons)
- [docz](https://github.com/pedronauck/docz) for documentation
- Testing suite ([jest](https://jestjs.io/), [enzyme](http://airbnb.io/enzyme/), [sinon](https://sinonjs.org/), [codecov](https://codecov.io))
- [Travis](https://travis-ci.org/)
- [Prettier](https://prettier.io/) on staged files
- Automatic [now.sh](https://zeit.co/now) PR deployment.
- [rollup](https://rollupjs.org/guide/en) for smaller builds (cjs, umd and es builds).

### Scripts

- `yarn storybook`: Run storybook in dev mode.
- `yarn build-storybook`: Build storybook.
- `yarn build`: Build your components and put them in dist directory. Creates the umd, es and cjs builds.
- `yarn build:watch`: Build your files while you make code changes.
- `yarn test:cover`: Run tests and report coverage to codecov.
- `yarn test`: Run tests.
- `yarn dev:docz`: Run docz in dev mode.
- `yarn build:docz`: Build docz
- `yarn test:watch`: Run tests while you make changes.
- `yarn format`: Run prettier on all supported files.
- `yarn deploy`: Deploy storybook on now.sh

## License

MIT
