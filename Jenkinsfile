pipeline {
    agent any

    // You need to start Docker in the machine before you run this file
    stages {
        stage('k6 - Performance Testing') {
            agent {
                docker {
                    image 'grafana/k6'
                    args '--entrypoint=""'
                }
            }
            steps {
                sh 'k6 run ./TypesOfTests/first-script.js'
            }
        }
    }
}
