package com.example.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @RequestMapping
    public String helloworld(){
        return "Hello world from IE33";
    }

}
