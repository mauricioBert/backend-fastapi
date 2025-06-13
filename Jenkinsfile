pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials-id'
        IMAGE_NAME = 'mauriciobertoldo/backend-fastapi'
        WORKSPACE_DIR = 'C:/ProgramData/Jenkins/.jenkins/workspace/deploy-fastapi'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat """
                docker run --rm -v ${WORKSPACE_DIR}:/app -w /app python:3.11-slim pip install -r requirements.txt
                """
            }
        }

        stage('Run tests') {
            steps {
                echo 'Sem testes configurados, pulando etapa'
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push Docker image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_HUB_CREDENTIALS) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
