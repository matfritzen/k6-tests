pipeline {
    agent any
    stages {
        stage('k6 - Performance Testing') {
            agent {
                docker {
                    image 'grafana/xk6'
                    args '--entrypoint=""'
                }
            }
            steps {
                sh 'k6'
            }
        }
    }
}
