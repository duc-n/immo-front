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
Build your image using the production configuration (the default), e.g.:
docker build -t immo-front:prod .

Build your image using the development environment (no configuration), e.g.:
docker build -t immo-front:dev --build-arg configuration="" .

 docker build -t celeduc/immo-front:0.0.1-SNAPSHOT .

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
Add a label to namespace
kubectl label namespace development istio-injection=enabled

get istio service list : kubectl get svc -n istio-system
or : kubectl get svc -n istio-system -l istio=ingressgateway

save the extenal ip in a variable by executing the command below:
EXTERNAL_IP=$(kubectl get svc -n istio-system \
  -l app=istio-ingressgateway \
  -o jsonpath='{.items[0].status.loadBalancer.ingress[0].ip}')

kubectl apply -f istio-http-gateway.yaml

kubectl get svc -n istio-system -l istio=ingressgateway

  kubectl describe gateway http-gateway

 docker build -t celeduc/immo-front:0.0.1-SNAPSHOT .
 
  docker tag celeduc/immo-front:0.0.1-SNAPSHOT eu.gcr.io/celeduc/immo-front:0.0.1-SNAPSHOT; 
 
  docker push eu.gcr.io/celeduc/immo-front:0.0.1-SNAPSHOT;
  github istio authen : https://github.com/rinormaloku/istio-auth0