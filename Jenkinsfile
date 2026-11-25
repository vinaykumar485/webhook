
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Webhook Trigger Verification') {
            steps {
                echo '======================================'
                echo 'GitHub Webhook Triggered Successfully!'
                echo '======================================'
            }
        }

        stage('Check Repository') {
            steps {
                echo "Repository URL: ${env.GIT_URL}"
                echo "Branch Name: ${env.GIT_BRANCH}"
                echo "Commit ID: ${env.GIT_COMMIT}"
            }
        }

        stage('Build Verification') {
            steps {
                echo 'Jenkins has successfully executed the pipeline.'
                echo 'Webhook integration test completed.'
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

