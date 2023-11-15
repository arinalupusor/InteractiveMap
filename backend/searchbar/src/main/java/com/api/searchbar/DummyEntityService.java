package com.api.searchbar;
import java.util.List;

public interface DummyEntityService {
    List<DummyEntityDto> search(String query);
}