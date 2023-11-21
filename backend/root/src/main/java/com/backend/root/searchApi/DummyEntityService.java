package com.backend.root.searchApi;
import java.util.List;

public interface DummyEntityService {
    List<DummyEntityDto> search(String query);
}