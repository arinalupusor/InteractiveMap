package com.crud.pins.Controller;
import com.crud.pins.Models.Locuri;
import com.crud.pins.Services.LocatieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/locatii")
public class LocatiiController {
    private final LocatieService locatieService;

    @Autowired
    public LocatiiController(LocatieService locatieService) {
        this.locatieService = locatieService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Locuri> getLocuriById(@PathVariable Long id) {
        Optional<Locuri> locuri = Optional.ofNullable(locatieService.getLocatieById(id));
        return locuri.
                map(ResponseEntity::ok).
                orElseGet(() -> ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<Locuri> createLocuri(@RequestBody Locuri locuri) {
        Locuri createdLocuri = locatieService.createLocatie(locuri);
        return new ResponseEntity<>(createdLocuri, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Locuri> updateLocuri(@PathVariable Long id, @RequestBody Locuri locuri) {
        Optional<Locuri> updatedLocuri = Optional.ofNullable(locatieService.updateLocatie(id, locuri));
        return updatedLocuri.
                map(value -> new ResponseEntity<>(value, HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLocuri(@PathVariable Long id) {
        locatieService.deleteLocatie(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

