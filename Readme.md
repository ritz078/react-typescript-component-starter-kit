# react-typescript-component-starter-kit

> A React component starter kit written in Typescript using the power of Babel 7 and Webpack 4.

#### There are already so many starter kits. Why this?

> Yes, I am already aware of those but setting up Babel 7 with storybook and typescript was not that straightforward 😥. This repo is mainly for that. Other things are just extras which I use personally.

### Features

- [Typescript](https://www.typescriptlang.org/)
- [emotion](https://emotion.sh/)
- [Babel](https://babeljs.io/) 7
- [Webpack](https://webpack.js.org/) 4
- [Storybook](https://storybook.js.org/) (all the necessary addons)
- [docz](https://github.com/pedronauck/docz) for documentation
- Testing suite ([jest](https://jestjs.io/), [enzyme](http://airbnb.io/enzyme/), [sinon](https://sinonjs.org/), [codecov](https://codecov.io))
- [Travis](https://travis-ci.org/)
- [Prettier](https://prettier.io/) on staged files
- Automatic [now.sh](https://zeit.co/now) PR deployment.
- [rollup](https://rollupjs.org/guide/en) for smaller builds (cjs, umd and es builds).

### Scripts

Few scripts are already written to make your life easier.

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

#### Why use rollup with typescript?

> Typescript can automatically convert the code to ES5 but I was more concerned about the file size so I am using typescript to convert `.tsx` to `.js` is ES6 and then rollup converts those files into **cjs**, **umd** and **es** builds.

#### Why both docz and storybook?

> Storybook has a lot of addons that help while development whereas docz seems great for detailed documentation and a pretty looking website. Also docz is slow if you are rendering PropsTable as it has to parse through the whole tree on every change.

**Note**: All the tools used in this repo are free for open source. Services like **now**, **codecov** and **travis** are not free for closed source projects.

## License

MIT
