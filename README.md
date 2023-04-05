# pokedex

Deployed at: https://liamthys.github.io/pokedex/

run locally: npm run dev

## Description

The client has always been a big fan of the original 151 Pokémon, and would like to have an app that can serve as their Pokédex. They’d like to browse through the Pokemon, search, manage their favourites, and more.

The’ve provided a list of things they want in the app (required), and also some extra’s (nice to have) if time allows it.

Additionally they want this app to:

- Be published in an online Git repository (Github, Bitbucket, …)

- Have clean commits

- Uses some open source packages (don’t reinvent the wheel), but be able to explain why.

## UI

The design of the app can be found here ([click through](https://www.figma.com/file/QeWa9FEHrAO6lqa5V6pQ8K/Sollicitatie-test?node-id=2%3A23) as there are multiple pages, such as one with designs for large screens):

There should be a **normal** design and a **nice to have** version with some more features.

You should try to implement the provided design, while also making sure the app works well and is built well. You may need to “translate” some parts of the design to more native/relevant components as needed, use your best judgement for this. For example, the “Sort on” sheet could be implemented as a UIMenu on iOS.

## Network

A custom API is provided, based on the official [PokéAPI](https://pokeapi.co/), although with some differences. An OpenAPI documentation can be found [here](https://appwise-be.stoplight.io/docs/pokemon/52335a540da77-front-end).

Most importantly, use these calls:

List of Pokémon: https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon

Details of a Pokémon: https://pokeapi.co/api/v2/pokemon/133 (replace 133 by ID of your item)

**NOTE**: do NOT embed the list JSON into your project, it must be fetched via network.

## Required

- Working with a JS Framework such as Vue, Angular, …

- Usage of a package manager (npm, pnpm…)

- Make use of routing to reflect the currently selected Pokémon in the URL.

  - Make sure the correct Pokémon is displayed when navigating directly to said URL.

- Make the website responsive for different screen sizes (mobile first)

  - Make the mobile design a priority

- Make sure the user-specific data (eg: liked Pokémon, etc…) persist between browser sessions

- Make use of the essentials of your framework (when applicable) such as :

  - Components

  - Lifecycle hooks

  - Global state management (e.g. [Getting Started | Vuex](https://vuex.vuejs.org/guide/), [Pinia 🍍](https://pinia.vuejs.org/))

  - Reactivity

  - Data binding

  - Props / slots

  - Routing

- Use of external libraries when applicable (Don’t reinvent the wheel) (e.g. [Axios](https://axios-http.com/))

## Nice to have

- Configure a linter to keep your code clean and consistent

- Use Typescript and consistently type all of your functions and custom objects

- Use of utility based css frameworks (e.g. Tailwind CSS - Rapidly build modern websites without ever leaving your HTML., Windi CSS)

- Create a ‘404’ page for navigating to URL’s that don’t exist or are invalid

- Use event debouncing/throttling when applicable

- Make sure there is an indicator when loading new data, and make sure no old data is visible when changing selected Pokémon
