# Gull

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# immo-front

# kubernetes config + namespace
Connecte to a cluster : gcloud container clusters get-credentials immo-cluster --zone europe-west3-a
Create developement namespace :kubectl create -f https://k8s.io/examples/admin/namespace-dev.json
Create production namespace : kubectl create -f https://k8s.io/examples/admin/namespace-prod.json

kubectl config view => current-context: gke_celeduc_europe-west3-a_immo-cluster

kubectl config set-context dev --namespace=development --cluster=gke_celeduc_europe-west3-a_immo-cluster --user=gke_celeduc_europe-west3-a_immo-cluster
kubectl config set-context prod --namespace=production --cluster=gke_celeduc_europe-west3-a_immo-cluster --user=gke_celeduc_europe-west3-a_immo-cluster
kubectl get namespaces --show-labels

Check the current context : 
kubectl config view

Let’s switch to operate in the development namespace : kubectl config use-context dev
kubectl config current-context
kubectl config use-context prod
kubectl get deployment