# sample-app-k8s-code
## Summary
- Update manifest files
- It is triggered by the buildimage job in Jenkins
- It is executed by ArgoCD or other GitOps tools

## Prerequisite
### ArgoCD Installation
- Installation Command
```Shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
kubectl port-forward svc/argocd-server -n argocd 8080:443
kubectl get -n argocd secret
kubectl get-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d
```
- ArgoCD Login
  - Input a command and confirm the port
```Shell
kubectl get -n argocd service argocd-server
```
  - Input `http://<IP Address>:<Port>` in the browser

### Prometheus, Alertmanager Installation
- Prerequisite commands
```Shell
kubectl create namespace prometheus
kubectl config set-context --current --namespace=prometheus
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
git clone https://github.com/prometheus-community/helm-charts.git
```

- Go to the prometheus subdirectory
- Modify [values.yaml](values.yaml)
  - Prometheus server setting
    - Change ClusterIP to NodePort
    - Change port to 31090
    - Change PersistentVolume disable
    - Set som rules for alarm
  - Alertmanager setting
    - Change persistence disable
    - Add a configuration for email alert

- Input the command
```Shell
helm install prometheus prometheus-community/prometheus -f values.yaml
```

### Grafana Installation
- Input the command
```Shell
helm repo add grafana https://grafana.github.io/helm-charts
helm install grafana grafana/grafana -f values.yaml
```

## Manifest Install
- ArgoCD executes the manifests
- Includes storage class, persistent volume, persistent volume claim using AWS EFS
- Includes services and ingress using an application load balancer
- Includes deployments for web services