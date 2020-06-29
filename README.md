* Install docker-engine for ubuntu by using the link https://docs.docker.com/engine/install/ubuntu/

* Install docker-compose for ubuntu by using the link https://docs.docker.com/compose/install/ (linux)

* Run the script below for using kafka-producer client 
	- sudo chmod +x kafka-start.sh
	- sudo ./kafka-start.sh
	
* Run docker containers and other docker scripts
	- Run 'sudo docker-compose up -d' at the same directory of docker-compose.yml for runing and upping containers. (Be sure exposed ports in the docker-compose are not used by another processes.)
  	- Run 'sudo docker-compose down' at the same directory of docker-compose.yml for stopping containers.
  	- Run 'sudo docker-compose ps' at the same directory of docker-compose.yml for seeing status of containers.
  	- Run 'sudo docker container ls -a' at the same directory of docker-compose.yml for seeing information about containers.
  	- Run 'sudo docker container logs <container_name>' at the same directory of docker-compose.yml for seeing log of the containers.
  	- Run 'sudo docker exec -it <container_name> bash' at the same directory of docker-compose.yml for logging to bash of the container.
  	- Run 'sudo docker container prune' at the same directory of docker-compose.yml for removing volume of stopped containers.


	
* Run the command below for sending messages to the topic listened by the java service
	- /usr/local/kafka/bin/kafka-console-producer.sh --broker-list localhost:9093 --topic courierLocationTopic 
	- Message type should be looks like {"date": "2000-10-31T01:30:00.000-05:00", "courierId": "Courier1", "longitude": 40.31231231, "latitude": 40.31231231}

* Exposed REST API is defined below for gettin total courier distance of courier with id
	- localhost:5000/distance/couriers/{id}
	- Example usage: run this command on your browser or with postman like localhost:5000/distance/couriers/Courier1 for courier with id "Courier1"
	

