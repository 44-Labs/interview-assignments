pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo "Hello workd"
            }
        }

        stage('Update GIT') {
            steps {
                script {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        withCredentials([usernamePassword(credentialsId: 'github', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                            sh "git config user.email rwim@naver.com"
                            sh "git config user.name realworldismine"

                            sh "cat manifests/deployment-user.yaml"
                            sh "sed -i 's+onikaze/sample-app-k8s-user:.*+onikaze/sample-app-k8s-user:${DOCKERTAG}+g' manifests/deployment-user.yaml"
                            sh "cat manifests/deployment-user.yaml"

                            sh "cat manifests/deployment-post.yaml"
                            sh "sed -i 's+onikaze/sample-app-k8s-post:.*+onikaze/sample-app-k8s-post:${DOCKERTAG}+g' manifests/deployment-post.yaml"
                            sh "cat manifests/deployment-post.yaml"

                            sh "cat manifests/deployment-notification.yaml"
                            sh "sed -i 's+onikaze/sample-app-k8s-notification:.*+onikaze/sample-app-k8s-notification:${DOCKERTAG}+g' manifests/deployment-notification.yaml"
                            sh "cat manifests/deployment-notification.yaml"

                            sh "git add ."
                            sh "git commit -m 'Done by Jenkins Job changemanifest: ${env.BUILD_NUMBER}'"
                            sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/${GIT_USERNAME}/sample-app-k8s-manifest.git HEAD:main"
                        }
                    }
                }
            }
        }
    }
}