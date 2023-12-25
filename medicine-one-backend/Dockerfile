FROM maven:3.9.4 AS build

WORKDIR /app

COPY . .

RUN mvn clean package

FROM openjdk:20

COPY --from=build /app/target/Team10-0.0.1-SNAPSHOT.jar /usr/local/lib/Team10-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/usr/local/lib/Team10-0.0.1-SNAPSHOT.jar"]