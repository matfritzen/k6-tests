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
                // The --quiet parameter is to not show the updates by the VUs in the log execution, and show only the report
                sh 'k6 run ./TypesOfTests/first-script.js --quiet'
            }
        }
    }
}
