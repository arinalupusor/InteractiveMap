package com.backend.root.TestHarta.Auth;

import com.backend.root.TestHarta.Security.JwtService;
import com.backend.root.TestHarta.User.AppUser;
import com.backend.root.TestHarta.User.Role;
import com.backend.root.TestHarta.User.UserRepository;
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
        repository.findByEmail(request.getEmail()).ifPresent(user -> {throw new RuntimeException();});
        var user = AppUser.builder().firstname(request.getFirstname()).lastname(request.getLastname()).email((request.getEmail())).password(passwordEncoder.encode(request.getPassword())).role(Role.USER).build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).email(user.getEmail()).type(user.getRole()).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).email(user.getEmail()).type(user.getRole()).build();
    }

}
