package Medione.config;

import Medione.handler.LoginInterceptor;
import org.mybatis.logging.Logger;
import org.mybatis.logging.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @ClassName WebMvcConfig
 * @Description config for crossing origin and interceptor
 **/
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Autowired
    private LoginInterceptor loginInterceptor;



    private final Logger logger = LoggerFactory.getLogger(WebMvcConfigurer.class);


    /** crossing origin config
     * @param registry default CorsRegistry
     */
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            // allow path
            registry.addMapping("/**")
//                    .allowedOrigins("http://localhost:8080/")   //local server
                    .allowedOrigins("http://localhost:80/",
                                    "https://182.92.169.27:80/",
                                    "https://182.92.169.27/medione-app/",
                                    "http://182.92.169.27:80/",
                                    "http://182.92.169.27/medione-app/",
                                    "http://182.92.169.27",
                                    "https://182.92.169.27",
                                    "http://localhost",
                                    "https://localhost",
                                    "http://localhost:8001/",
                                    "https://localhost:8001/")     //developing website
//                    .allowedOrigins("*")     //release website
                    .allowCredentials(true)
                    .allowedMethods("*")
                    .maxAge(3600);
        }


    /** config about path to block
     * @param registry login interceptor
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//        block exclude/login  /register.....
//        block register for testing!
        registry.addInterceptor(loginInterceptor)
//                .addPathPatterns("/**")
//                .excludePathPatterns("/login")
//                .excludePathPatterns("/user/**")
//                .excludePathPatterns("/medicine/**")
//                .excludePathPatterns("/dashboard/**")
//                .excludePathPatterns("/dashboard")
//                .excludePathPatterns("/register")
//                .excludePathPatterns("/about")
//                .excludePathPatterns("/mail")
//                .excludePathPatterns("/mail/**")
//                .excludePathPatterns("/generator/**")
//                .excludePathPatterns("/reset_password")
//                .excludePathPatterns("")
//                .excludePathPatterns("/")

                .addPathPatterns("/dashboard")
                .addPathPatterns("/dashboard/**")
                .excludePathPatterns("/")
                .excludePathPatterns("register")
                .excludePathPatterns("/login")
                .excludePathPatterns("/user/**")
                .excludePathPatterns("/medicine/**")
                .excludePathPatterns("/register")
                .excludePathPatterns("/about")
                .excludePathPatterns("/mail")
                .excludePathPatterns("/mail/**")
                .excludePathPatterns("/generator/**")
                .excludePathPatterns("/reset_password")
                .excludePathPatterns("/location")
                .excludePathPatterns("/location/**")
        ;


    }
//        @Override
//        public void addResourceHandlers(ResourceHandlerRegistry registry) {
////
//            registry.addResourceHandler("/medicine/**")
//                    .addResourceLocations("classpath:/medicine/","file:medicine/")
//            ;
//        }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry)  {
        registry.addResourceHandler("/view/**").addResourceLocations("file:"+System.getProperty("user.dir")+"/view/");

    }



}