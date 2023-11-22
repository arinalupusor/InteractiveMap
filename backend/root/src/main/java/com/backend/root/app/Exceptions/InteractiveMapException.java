package com.backend.root.app.Exceptions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class InteractiveMapException extends RuntimeException{
    private final HttpStatus status;
    public InteractiveMapException(String message, HttpStatus status)
    {
        super(message);
        this.status = status;
    }

    public ResponseEntity<Object> ToResponseEntity() throws JsonProcessingException {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("error", this.getMessage());
        ObjectMapper objectMapper = new ObjectMapper();
        return ResponseEntity.status(this.status).body(objectMapper.writeValueAsString(errorMap));
    }

}
