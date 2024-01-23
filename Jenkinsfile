pipeline {
    agent any
    // To setup environment variables you can use the environments keyword
    /*
    environment {
        K6_CLOUD_TOKEN = credentials('k6_cloud_token')
        K6_CLOUD_PROJECT_ID = 12312
    }
    */
    
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
