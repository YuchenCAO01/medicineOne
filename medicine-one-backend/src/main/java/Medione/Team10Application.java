package Medione;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

/**
 * @ClassName Team10Application
 * @Description start application/ entry for the project
 **/

@SpringBootApplication
@EnableCaching
public class Team10Application {

    public static void main(String[] args) {
        SpringApplication.run(Team10Application.class, args);
        System.out.println();
        System.out.println("===========================================");
        System.out.println("=see this line means running is successful=");
        System.out.println("===========================================");
    }


}
