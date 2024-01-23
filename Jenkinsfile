pipeline {
    agent any
    stages {
        stage('k6 - Performance Testing') {
            agent {
                docker {
                    image 'grafana/k6'
                    args '--entrypoint=""'
                }
            }
            steps {
                sh 'k6'
            }
        }
    }
}
