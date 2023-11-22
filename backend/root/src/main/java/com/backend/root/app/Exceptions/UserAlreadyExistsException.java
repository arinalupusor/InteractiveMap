package com.backend.root.app.Exceptions;
import org.springframework.http.HttpStatus;

public class UserAlreadyExistsException extends InteractiveMapException {
    static String message = "There is already an account registered on this email!";
    static HttpStatus status = HttpStatus.CONFLICT;
    public UserAlreadyExistsException()
    {
        super(message, status);
    }
}
