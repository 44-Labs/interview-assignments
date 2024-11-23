### 1. Docker를 이용한 컨테이너 배포
- 각 user, post, notification code 수정
  - user.js : 중복 코드 수정, 특정 사용자 조회 코드 설정
  - post.js : dockerfile port 통일 3002, 
  - notification.js : python code 참조해서 nodejs 코드 설정 
- Nodejs, python Docker-compose를 이용하여 local minikube에 배포 실행
   - nodejs, python 로컬에서 docker 실행 
   - curl 명령어를 통한 컨테이너 간의 통신 상태 확인
   - 정상 통신 내역 png file 참조
     - nodeJs/nodejs 정상 통신내역
     - python/python 정상 통신내역

### 2. AWS를 활용한 Cloud 배포
- Terraform을 이용한 AWS 배포 코드 제출
  - VPC, EC2, RDS(aurora), Redis, s3, Route53, WAF, ALB, EBS-backup, dynamodb(backend), codestar, chatbot, SNS, labmda
- Modules에 각 기능 정의 
- environments에서 modeuls 참조하여 인프라 배포
- 44lab-Architecture.png 아키텍처 참조

### 3. 자동화 및 모니터링
-  EC2, ECS autoscaling 설정
    - ECS : cpu/memory 임계치에 따른 가용성 50% scale-in/out
- Cloudwatch 및 lambda+Eventbridge+SNS 모니터링
    - Cloudwatch 경보 설정
    - Labmda_rds_function.mjs(nodejs) 함수를 이용하여 rds 상태에 따른 SNS 전송(slack,google 선택사항)
    - EC2 heath check fail 시, SNS 전송 모니터링

### 4. Kubernetes 배포
- nodeJs로 minikube 배포 테스트
- Helm Chart를 이용한 user, post, notification 배포
- 자동화 배포 테스트 
  - github action을 이용하여 각 서비스(user, port, notification) js 코드 변경 및 커밋 발생 시 자동 배포 설정
    .github/workflows/ user-deploy, post,deploy, notification-deploy
  - github action을 통해 argocd에서 테스트 배포 실행 
    .github/workflows/ user-deploy, post,deploy, notification-deploy

### 제출 사항
1. 각 마이크로서비스의 Dockerfile 및 Docker Compose 파일 (필요시)
   - nodeJS 및 python 폴더로 제출
2. AWS 클라우드 배포 아키텍처 및 실행 코드
   - terrform code 및 아키텍처 제출
3. Kubernetes 매니페스트 파일 (YAML) 및 배포 과정 녹화 파일
   - nodejs로 helm chart로 배포 제출
   - github action 코드 제출
   - github 정상 동작 파일 제출

* 환경 제한사항
- AWS 클라우드 환경을 직접 구성하신 후, Postman 등의 도구를 이용해 서비스를 테스트하고, 그 과정을 녹화해 제출 
   - 양해사항 : AWS는 사용량에 따라 비용이 발생하기 때문에 실제 AWS 환경에서 테스트를 진행 할 수 없었음을 양해 부탁드립니다.
- 모든 테스트는 로컬에서 mini-kube를 이용하여 테스트 진행하였습니다.
  - kubectl get all 내역을 통해서 k8s 배포 현황 제출
- 서비스 정상동작에 대한 png 파일을 추가하였습니다.
