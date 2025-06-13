pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials-id' // Vamos configurar isso no Jenkins depois
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
                // Coloque aqui seu comando de teste, se tiver
                // Se não tiver, pode comentar ou pular essa etapa
                // sh 'pytest tests/'
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
