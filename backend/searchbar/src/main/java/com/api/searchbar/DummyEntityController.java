package com.api.searchbar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class DummyEntityController {
    @Autowired
    private DummyEntityService dummyEntityService;

    @GetMapping("/search")
    public ResponseEntity<List<DummyEntityDto>> search(@RequestParam("query") String query){
        return ResponseEntity.ok(dummyEntityService.search(query));
    }
}

