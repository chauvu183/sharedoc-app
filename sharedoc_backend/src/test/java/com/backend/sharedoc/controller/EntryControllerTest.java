package com.backend.sharedoc.controller;

import com.backend.sharedoc.model.Entry;
import com.backend.sharedoc.repository.EntryRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EntryControllerTest {

  @MockBean
  EntryRepository entryRepository;
  
  @Autowired
  EntryController entryController;

  Entry entry;
  Optional<Entry> entryOpt;

  @BeforeEach
  public void initialize() {
    entry = mock(Entry.class);
    entryOpt = Optional.of(entry);
  }

  @Test
  public void testGetEntries() {
    Page<Entry> page = Page.empty();
    Pageable pageable = Pageable.unpaged();
    when(entryRepository.findAll(any(Pageable.class))).thenReturn(page);
    assertEquals(page, entryController.getEntries(pageable));
  }

  @Test
  public void testCreateEntry() {
    when(entryRepository.save(entry)).thenReturn(entry);
    assertEquals(entry, entryController.createEntry(entry));
  }
}
