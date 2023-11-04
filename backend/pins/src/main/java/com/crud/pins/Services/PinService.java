package com.crud.pins.Services;
import com.crud.pins.Models.PinHarta;
import com.crud.pins.Repo.LocuriInteresRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PinService {
    private final LocuriInteresRepo locuriInteresRepo;

    @Autowired
    public PinService(LocuriInteresRepo locuriInteresRepo) {
        this.locuriInteresRepo = locuriInteresRepo;
    }

    public List<PinHarta> getAllLocatii() {
        return locuriInteresRepo.findAll();
    }

    public PinHarta getLocatieById(Long id) {
        return locuriInteresRepo.findById(id).orElse(null);
    }

    public PinHarta createLocatie(PinHarta locatie) {
        return locuriInteresRepo.save(locatie);
    }

    public PinHarta updateLocatie(Long id, PinHarta locatie) {
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