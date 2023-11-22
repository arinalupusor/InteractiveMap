package com.backend.root.app.Configuration;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.backend.root.app.Exceptions.InteractiveMapException;

import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(InteractiveMapException.class)
    public ResponseEntity<Object> handleInteractiveMapException(InteractiveMapException ex) throws JsonProcessingException {
        return ex.ToResponseEntity();
    }
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<Object> handleAuthenticationException(AuthenticationException ex) throws JsonProcessingException {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("error", ex.getMessage());
        ObjectMapper objectMapper = new ObjectMapper();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(objectMapper.writeValueAsString(errorMap));
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("error", ex.getBindingResult().getAllErrors().get(0).getDefaultMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
    @ExceptionHandler(DateTimeParseException.class)
    public ResponseEntity<Map<String, String>> handleDateTimeParseExceptions(DateTimeParseException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("error", "Wrong time format, could not parse it!");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
}