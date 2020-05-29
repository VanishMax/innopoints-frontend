# Innopoints

This is the frontend for the Innopoints portal of Innopolis University.

Built using:
 - [Svelte](https://svelte.dev/)
 - [Sapper](https://sapper.svelte.dev/)
 - [Sass](https://sass-lang.com/)
 - [Feather Icons](https://feathericons.com/)
 - [Humaaans](https://humaaans.com/)

## Running locally

Ensure you have [Yarn](https://yarnpkg.com/) installed.
To run the application locally, run the following:

```bash
yarn install
yarn dev
```

## Project structure

There are three types of entities that build up this website:
 - Pages ([`src/routes`](https://github.com/Innopoints/frontend/tree/master/src/routes))
 - Containers ([`src/containers`](https://github.com/Innopoints/frontend/tree/master/src/containers))
 - Components ([`src/components`](https://github.com/Innopoints/frontend/tree/master/src/components))

The pages are the largest entities, the structure defines the routes on the website (powered by Sapper).

The containers are major blocks on pages.

The components are small building blocks that make up containers and pages. Frequently very contextual and narrow-purposed.

The SCSS styles are located in [`static/css`](https://github.com/Innopoints/frontend/tree/master/static/css), and are reflecting the structure of pages, containers and components.

**Important**: The bundler in use is Rollup, and there's an path aliasing plugin installed. Particularly, `@` is an alias for `/src/`. An up-to-date list of aliases can be found in [`rollup.config.js`](https://github.com/Innopoints/frontend/blob/master/rollup.config.js).


## License
This project is [MIT licensed](https://github.com/Innopoints/frontend/blob/master/LICENSE).
