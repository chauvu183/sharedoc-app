package com.backend.sharedoc.controller;

import com.backend.sharedoc.model.Comment;
import com.backend.sharedoc.model.Entry;
import com.backend.sharedoc.repository.CommentRepository;
import com.backend.sharedoc.repository.EntryRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentControllerTest {

  @MockBean
  public CommentRepository commentRepository;

  @MockBean
  public EntryRepository entryRepository;
  
  @Autowired
  CommentController answerController;

  Entry entry;
  Comment comment;

  @BeforeEach
  public void initialize() {
    entry = mock(Entry.class);
    comment = mock(Comment.class);
  }

  @Test
  public void testGetCommentsByEntryId() {
    List<Comment> comments = new ArrayList<Comment>();
    when(commentRepository.findByEntryId(anyLong())).thenReturn(comments);
    assertEquals(comments, answerController.getCommentsByEntryId(anyLong()));
  }
}
