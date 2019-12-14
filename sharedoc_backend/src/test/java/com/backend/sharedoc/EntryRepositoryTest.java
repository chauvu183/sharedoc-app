package com.backend.sharedoc;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import com.backend.sharedoc.model.Entry;
import com.backend.sharedoc.repository.EntryRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EntryRepositoryTest {

  @Autowired
  private EntryRepository entryRepository;

  @Test
  public void testSaveEntry() {

    Entry entry = new Entry("RN Scripte", "You can contact me at student@haw-hamburg.de");
    entryRepository.save(entry);
    Entry entry2 = entryRepository.findByTitle("RN Scripte");
    assertNotNull(entry);
    assertEquals(entry2.getTitle(), entry.getTitle());
    assertEquals(entry2.getDescription(), entry.getDescription());
  }

  @Test
  public void testGetEmployee() {

    Entry entry = new Entry("RN Scripte", "You can contact me at student@haw-hamburg.de");
    entryRepository.save(entry);
    Entry entry2 = entryRepository.findByTitle("RN Scripte");
    assertNotNull(entry);
    assertEquals(entry2.getTitle(), entry.getTitle());
    assertEquals(entry2.getDescription(), entry.getDescription());
  }

  @Test
  public void testDeleteEntry() {
    Entry entry = new Entry("RN Scripte", "You can contact me at student@haw-hamburg.de");
    entryRepository.save(entry);
    entryRepository.delete(entry);
  }

  @Test
  public void findAllEntries() {
    Entry entry = new Entry("RN Scripte", "You can contact me at student@haw-hamburg.de");
    entryRepository.save(entry);
    assertNotNull(entryRepository.findAll());
  }

  @Test
  public void deletByEntryIdTest() {
    Entry entry = new Entry("RN Scripte", "You can contact me at student@haw-hamburg.de");
    Entry savedEntry = entryRepository.save(entry);
    entryRepository.deleteById(savedEntry.getId());
  }
}
