package com.crud.pins.Services;
import com.crud.pins.Models.Locuri;
import com.crud.pins.Repo.LocuriInteresRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class LocatieService {
    private final LocuriInteresRepo locuriInteresRepo;

    @Autowired
    public LocatieService(LocuriInteresRepo locuriInteresRepo) {
        this.locuriInteresRepo = locuriInteresRepo;
    }

    public List<Locuri> getAllLocatii() {
        return locuriInteresRepo.findAll();
    }

    public Locuri getLocatieById(Long id) {
        return locuriInteresRepo.findById(id).orElse(null);
    }

    public Locuri createLocatie(Locuri locatie) {
        return locuriInteresRepo.save(locatie);
    }

    public Locuri updateLocatie(Long id, Locuri locatie) {
        if (locuriInteresRepo.existsById(id)) {
            locatie.setId(id);
            return locuriInteresRepo.save(locatie);
        }
        return null;
    }

    public void deleteLocatie(Long id) {
        locuriInteresRepo.deleteById(id);
    }

}