# Cumulus Bank Mobile App Operator
<h1 align="center">
  <br>
  <a href="https://github.com/SaifRehman/mongo-rest-operator"><img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjanakirammsv%2Ffiles%2F2018%2F05%2Frh-os.jpg" alt="openshift" width="IBM"></a>
  <br>
      Cumulus Bank Mobile App Operator for Openshift
  <br>
  <br>
</h1>

<h4 align="center">Powered by Openshift and OperatorSDK</h4>

<p align="center">
  <a>
    <img src="https://img.shields.io/travis/keppel/lotion/master.svg"
         alt="Travis Build">
  </a>
</p>
<br>
## Install Operator on Openshift

1. clone the repo
```
$ git clone https://github.com/cumulus-bank/Mobile-App.git
```
2. install ***serviceaccount***, ***rolebinding***, ***role***, ***crd***, and ***operator***
```
$ oc apply -f deploy/service_account.yaml
$ oc apply -f deploy/role.yaml
$ oc apply -f deploy/role_binding.yaml
$ oc apply -f deploy/operator.yaml
$ oc apply -f deploy/crds/cumulusbank_v1alpha1_cumulusionic_crd.yaml
```
## Deploy Cumulus Bank Mobile App
1. create mongorest yaml, example reservation microservice. This is a reservation microservice which performs crud operations on mongodb database to store firstname,  lastname, and uid. 
``` YAML
apiVersion: cumulusbank.com/v1alpha1
kind: CumulusIonic
metadata:
  name: ionicapp
spec:
  replicaCount: 1
```
4. Apply these YAML configuration