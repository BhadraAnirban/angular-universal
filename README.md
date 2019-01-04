# Universal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Install dependencies -

npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader

## Add Universal support to your app -

Make your AppModule compatible with Universal by adding .withServerTransition() and an application ID to your BrowserModule import in src/app/app.module.ts

Here's an example in src/app/app.module.ts.

## Create a server root module -

Create a module named AppServerModule to act as the root module when running on the server. This example places it alongside app.module.ts in a file named app.server.module.ts. The new module imports everything from the root AppModule, and adds ServerModule. It also adds ModuleMapLoaderModule to help make lazy-loaded routes possible during server-side renders with the Angular CLI.

Here's an example in src/app/app.server.module.ts.

## Create a main file to export AppServerModule -

Create a main file for your Universal bundle in the app src/ folder to export your AppServerModule instance. This example calls the file main.server.ts.

### export { AppServerModule } from './app/app.server.module';

## Set up a server to run Universal bundles -

At the root level of your project, next to package.json, create a file named server.ts and add the following content present in src/app/app.server.module.ts..

In the server.ts example 'universal' is the my-project-name. Update it with your project name

## Web Pack settings to run the app on the server -

Set up a webpack configuration to handle the Node Express server.ts file and serve your application.
In your app root directory, create a webpack configuration file (webpack.server.config.js) that compiles the server.ts file and its dependencies into dist/server.js.

Here's (in the project file structure) an example of webpack.server.config.js.

### Don't forget to mention the mode as 'development' in the webpack.server.config.js.

## Create a new build target and build the bundle -

Open the Angular configuration file, angular.json, for your project, and add a new target in the "architect" section for the server build. The following example names the new target "server".
"architect": {
  "build": { ... }
    "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/server",
            "main": "src/main.server.ts",
            "tsConfig": "src/tsconfig.server.json"
          }
    }
    ...
}
......
"defaultProject": "universal" -- Already generated and this is the my-project-name

## Creating scripts -

Now let's create a few handy scripts to help us do all of this in the future. You can add these in the script of package.json.

"scripts": {
      // Common scripts
      "build:ssr": "npm run build:client-and-server-bundles && npm run webpack:server",
      "serve:ssr": "node dist/server.js",

      // Helpers for the scripts
      "build:client-and-server-bundles": "ng build --prod && ng build --prod --app 1 --output-hashing=false",
      "webpack:server": "webpack --config webpack.server.config.js --progress --colors"
    }

### You may need to rectify tthe above script to make it work -
"build:client-and-server-bundles": "ng build --prod && ng build --prod --output-hashing=all",
    "webpack:server": "webpack --config webpack.server.config.js --progress --colors"

## Execute in the node terminal -

### ng run <my-project-name>:server

### npm run build:ssr && npm run serve:ssr


## pm2 setup for the server - 

PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever.

### sudo npm install –g  pm2
### pm2 start dist/server.js --name=ani_universal

Application is ready to access from http://localhost:4400 (as per the port number, mentioned in server.ts)




