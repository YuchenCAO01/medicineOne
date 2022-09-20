package Medione.handler;

import Medione.pojo.User;
import Medione.utils.BaseContext;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.servlet.FilterChain;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        Cookie cookie = new Cookie("JSESSIONID",request.getSession().getId());
        cookie.setHttpOnly(false);
        cookie.setSecure(false);
        response.addCookie(cookie);
        response.addHeader("Set-Cookie","JSESSIONID="+request.getSession().getId());
        response.setHeader("Access-Control-Expose-Headers","Set-Cookie");
        response.setHeader("Access-Control-Allow-Origin",request.getHeader("Origin"));//支持跨域请求
        response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");//五种请求
        response.setHeader("Access-Control-Allow-Credentials", "true");//是否支持cookie跨域
        response.setHeader("Access-Control-Allow-Headers", "Set-Cookie,Authorization,Origin, X-Requested-With, Content-Type, Accept,Access-Token");//Origin, X-Requested-With, Content-Type, Accept,Access-Token
        HttpSession session =request.getSession();

        User user = (User) session.getAttribute("user");
        if(user == null){
//            response.sendRedirect("http://localhost:8080").;
            //未登陆，返回登陆页面
//            request.setAttribute("msg","没有权限请先登陆");
//            request.getRequestDispatcher("http://localhost:8080")
//                    .forward(request,response)
            ;
            System.out.println("not yet login");

            return false;
        }
        else {
            BaseContext.setCurrentSession(session);
//            request.getRequestDispatcher()
        }
        System.out.println("already login");
        return true;
    }



}
