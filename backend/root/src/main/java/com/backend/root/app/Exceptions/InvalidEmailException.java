package com.backend.root.app.Exceptions;
import org.springframework.http.HttpStatus;

public class InvalidEmailException extends InteractiveMapException {
    static String message = "Could not find an account with this email!";
    static HttpStatus status = HttpStatus.BAD_REQUEST;
    public InvalidEmailException()
    {
        super(message, status);
    }
}
