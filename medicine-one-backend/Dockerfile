#FROM maven:3.9.4 AS build
#
#WORKDIR /app
#
#COPY . .
#
#RUN mvn clean package
#
#FROM openjdk:20
#
#COPY --from=build /app/target/Team10-0.0.1-SNAPSHOT.jar /usr/local/lib/Team10-0.0.1-SNAPSHOT.jar
#
#ENTRYPOINT ["java", "-jar", "/usr/local/lib/Team10-0.0.1-SNAPSHOT.jar"]

# 使用 Maven 镜像构建
FROM maven:3.9.4 AS build

# 设置工作目录
WORKDIR /app

# 首先只复制 pom.xml 文件
COPY pom.xml .

# 下载依赖，这样依赖就会被缓存
RUN mvn dependency:go-offline

# 现在复制其余的项目文件
COPY src /app/src

# 打包应用
RUN mvn clean package

# 使用 OpenJDK 镜像运行
FROM openjdk:20

# 从构建阶段复制 JAR 文件
COPY --from=build /app/target/Team10-0.0.1-SNAPSHOT.jar /usr/local/lib/Team10-0.0.1-SNAPSHOT.jar

# 设置容器入口点
ENTRYPOINT ["java", "-jar", "/usr/local/lib/Team10-0.0.1-SNAPSHOT.jar"]
