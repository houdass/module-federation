##### ng new module-federation-starter --create-application=false

##### ng g app shell (Host)

##### ng g app product (MicroFrontend/Remote)
##### ng g app customer (MicroFrontend/Remote)
##### ng g app order (MicroFrontend/Remote)
##### ng g app tracking (MicroFrontend/Remote)

##### Add resolutions to package.json
```
"resolutions": {
    "webpack": "5.0.0"
}
```

This section makes yarn to install webpack 5 for the CLI (and for all the other libraries depending on webpack).

##### yarn add bootstrap

##### yarn install

##### ng add @angular-architects/module-federation --project shell --port 3003

##### ng add @angular-architects/module-federation --project product --port 4004

##### ng add @angular-architects/module-federation --project customer --port 5005

##### ng add @angular-architects/module-federation --project order --port 6006

##### ng add @angular-architects/module-federation --project tracking --port 7007

##### Adjust webpack.config.js of the shell and remotes

##### Edit routing in the shell

##### As the Url project/Module does not exist at compile time, ease the TypeScript compiler by adding the following line to the file projects\shell\src\declarations.d.ts:
     
```
declare module 'product/Module';
```

#### ng serve shell -o
#### ng serve project -o

##### Edit routing in the shell
