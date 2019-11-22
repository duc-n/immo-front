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

ip : 34.89.180.199

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


 export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
 export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
 export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].port}')
 
  Resize kubernetes cluster : gcloud container clusters resize immo-cluster --num-nodes=0 --zone europe-west3-a
  Active : gcloud container clusters resize immo-cluster --num-nodes=3 --zone europe-west3-a

  kubectl get all --all-namespaces
  kubectl logs cert-manager-6b5d76bf77-vwqsq -n cert-manager

  Get label of namespace : kubectl get namespace -L istio-injection
kubectl delete serviceaccount/build-robot

  kubectl get pods/<podname> -o yaml
  kubectl describe gateway httpbin-gateway

  kubectl delete gateway httpbin-gateway
  kubectl delete virtualservice httpbin
  kubectl delete --ignore-not-found=true -f https://raw.githubusercontent.com/istio/istio/release-1.4/samples/httpbin/httpbin.yaml


  openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -subj '/O=cele Inc./CN=cele.app' -keyout cele.app.key -out cele.app.crt

  openssl req -out immo-front.cele.app.csr -newkey rsa:2048 -nodes -keyout immo-front.cele.app.key -subj "/CN=immo-front.cele.app/O=cele organization"

  openssl x509 -req -days 365 -CA cele.app.crt -CAkey cele.app.key -set_serial 0 -in immo-front.cele.app.csr -out immo-front.cele.app.crt

  kubectl create -n istio-system secret tls istio-ingressgateway-certs --key immo-front.cele.app.key --cert immo-front.cele.app.crt
  Verify that tls.crt and tls.key have been mounted in the ingress gateway pod:  kubectl exec -it -n istio-system $(kubectl -n istio-system get pods -l istio=ingressgateway -o jsonpath='{.items[0].metadata.name}') -- ls -al /etc/istio/ingressgateway-certs