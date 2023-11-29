FROM maven:3.8.4-openjdk-17 AS builder

WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline -B

# Copy the rest of the application files
COPY src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17.0-jdk-slim

WORKDIR /app

COPY --from=builder /app/target/josianaBackend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]