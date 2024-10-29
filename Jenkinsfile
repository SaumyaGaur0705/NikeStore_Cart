pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "eren070502/nikectorecart:latest"
    }
    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/SaumyaGaur0705/NikeStore_Cart'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                   
                    docker.build("${DOCKER_IMAGE}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        docker.image("${DOCKER_IMAGE}").push()
                    }
                }
            }
        }
        
       stage('Deploy to Kubernetes') {
            steps {
                script {
                   
                    sh '''
                    kubectl apply -f kubernetes/deployment.yaml
                    kubectl apply -f kubernetes/service.yaml
                    '''
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}

