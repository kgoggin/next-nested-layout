# Next.js With Nested Routing/Layout

## Running the app

After cloning it, run `yarn` to install dependencies, then `yarn dev` to start the app.

## How it works

The app uses Next's [dynamic routing](https://github.com/zeit/next.js#dynamic-routing) to create a single page for all docs, and another one for all examples. The "id" of the doc/example we want is accessed via `withRouter` - this changes dynamically as we click around, without reloading the entire page.

Then, using the id of the page we want to fetch, we use Next's [dynamic import](https://github.com/zeit/next.js#dynamic-import) to fetch the MDX component and show it in the screen.
