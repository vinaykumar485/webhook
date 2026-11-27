
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code checkout completed'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Build React Application') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                    sudo cp -r frontend/dist/. /var/www/employee-management/
                    sudo systemctl reload nginx
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'curl -f http://localhost'
            }
        }
    }

    post {
        success {
            echo 'PIPELINE STATUS: SUCCESS'
        }

        failure {
            echo 'PIPELINE STATUS: FAILED'
        }
    }
}

