pipeline {
    agent {
        docker {
            image 'python:3.11-slim'  // imagem oficial Python leve
            args '-v /var/run/docker.sock:/var/run/docker.sock'  // se precisar docker-in-docker
        }
    }

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials-id'
        IMAGE_NAME = 'mauriciobertoldo/backend-fastapi'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'pip install -r requirements.txt'
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
