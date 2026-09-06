# Use Java 21
FROM eclipse-temurin:21-jdk

# Working directory inside container
WORKDIR /app

# Copy the Spring Boot JAR
COPY target/*.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]