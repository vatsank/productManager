# Instructions

create a new Angular Project with ng new productManager --routing

Create Three Compoents  ng g components compName (addProduct,login,register,showProduct)

Create a Service ng g service authenticate

create another service ng g AuthGuardService

Open the app-routing Module and update it

Start the Server and view the application   ng serve -o 

Copy the Product.json to an exernal folder and use json-server --watch product.json

 Create a interface ng g interface Product

 Create a service ng g service product

 Update the Provider in the app-module.ts

Update product Service Constructor DI - Http;

 Implete getAllProduct() returning a Observable of Product Array Using get-REST Method

 Update the AddProduct Component DI-Product Service

 In the ngInit() Invoke the service and Subscribe.

 Store the response in a Product Array.

 Render in the template Using  table structure.

# ProductPromotion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
