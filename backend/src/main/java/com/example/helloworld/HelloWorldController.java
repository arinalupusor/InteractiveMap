package com.example.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @RequestMapping
    public String helloworld(){
        return "Hello world from IE33";
    }

    @RequestMapping("/goodbye")
    public String goodbye() {
        return "GoodBye";
    }

}
