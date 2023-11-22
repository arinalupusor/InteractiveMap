package com.backend.root.app.Services;

import com.backend.root.app.DTOs.RegisterRequest;
import com.backend.root.app.Configuration.JwtService;
import com.backend.root.app.Entities.AppUser;
import com.backend.root.app.Entities.Role;
import com.backend.root.app.Exceptions.UserAlreadyExistsException;
import com.backend.root.app.Exceptions.InvalidEmailException;
import com.backend.root.app.Repositories.UserRepository;
import com.backend.root.app.DTOs.AuthenticationRequest;
import com.backend.root.app.DTOs.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        repository.findByEmail(request.getEmail()).ifPresent(user -> {throw new UserAlreadyExistsException();});
        var user = AppUser.builder().firstname(request.getFirstname()).lastname(request.getLastname()).email((request.getEmail())).password(passwordEncoder.encode(request.getPassword())).role(Role.valueOf(request.getType())).build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).email(user.getEmail()).type(user.getRole()).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user = repository.findByEmail(request.getEmail()).orElseThrow(InvalidEmailException::new);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).email(user.getEmail()).type(user.getRole()).build();
    }

}
