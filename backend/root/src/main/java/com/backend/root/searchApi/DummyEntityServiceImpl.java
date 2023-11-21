package com.backend.root.searchApi;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DummyEntityServiceImpl implements DummyEntityService {
    private DummyEntityRepository dummyEntityRepository;
    private ModelMapper modelMapper;

    @Autowired
    public DummyEntityServiceImpl(DummyEntityRepository dummyEntityRepository, ModelMapper modelMapper) {
        this.dummyEntityRepository = dummyEntityRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<DummyEntityDto> search(String query) {
        List<DummyEntity> dummyEntities = dummyEntityRepository.search(query);
        return dummyEntities.stream()
                .map(dummyEntity -> modelMapper.map(dummyEntity, DummyEntityDto.class))
                .collect(Collectors.toList());
    }
}

