package com.backend.sharedoc.controller;

import com.backend.sharedoc.exception.ResourceNotFoundException;
import com.backend.sharedoc.model.Entry;
import com.backend.sharedoc.repository.EntryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/pinboard")
@CrossOrigin(origins = "http://localhost:4200")

public class EntryController {

  @Autowired
  private EntryRepository entryRepository;

  @GetMapping("/entries")
  public Page<Entry> getEntries(Pageable pageable) {
    return entryRepository.findAll(pageable);
  }

  @GetMapping("/entries/all")
  public List<Entry> all() {
    return this.entryRepository.findAll();
  }

  @PostMapping("/entries")
  public Entry createEntry(@Valid @RequestBody Entry entry) {
    return entryRepository.save(entry);
  }

  @PutMapping("/entries/{entryId}")
  public Entry updateEntry(@PathVariable Long entryId, @Valid @RequestBody Entry entryRequest) {
    return entryRepository.findById(entryId).map(entry -> {
      entry.setTitle(entryRequest.getTitle());
      entry.setDescription(entryRequest.getDescription());
      return entryRepository.save(entry);
    }).orElseThrow(() -> new ResourceNotFoundException("Entry not found with id " + entryId));
  }

  @DeleteMapping("/entries/{entryId}")
  public ResponseEntity<?> deleteEntry(@PathVariable Long entryId) {
    return entryRepository.findById(entryId).map(entry -> {
      entryRepository.delete(entry);
      return ResponseEntity.ok().build();
    }).orElseThrow(() -> new ResourceNotFoundException("Entry not found with id " + entryId));
  }
}
