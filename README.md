# Module Federation w/ shared React Context

## Introduction

This repo contains two independent React SPAs, `host-app` and `page-app`,
connected via Webpack's `Module Federation`. 

`page-app` provides the React Component, `FederatedPage`, which takes
`MessageContext` as a `prop`.

`host-app` imports `page-app/FederatedPage`, providing it with `MessageContext`.
Within `page-app`, the `FederatedContextConsumer` component displays the message
provided via `MessageContext`. 

## Getting started

Download the repository:

```
git@github.com:sjlutterbie/module-federation.git
```

Install dependencies in both directories. _Note: I intentionally opted not to use
Yarn workspaces, etc. in order to keep the projects fully independent._

First, start the `page-app`:

```
cd .../page-app && yarn start
```

It should run locally on [http://localhost:8081](http://localhost:8081), and should
render the `FederatedPage`.

Second, start `host-app`:

```
cd .../host-app && yarn start
```

It should run locally on [http://localhost:8080](http://localhost:8080), and should
both its own content AND `FederatedPage`. Notice that `FederatedPage` is rendering
the message from the shared `MessageContext`.

## Next steps
Extend `MessageContext` such that it can be updated from within `FederatedPage`.