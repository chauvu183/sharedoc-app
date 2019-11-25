package com.backend.sharedoc.controller;

import com.backend.sharedoc.exception.ResourceNotFoundException;
import com.backend.sharedoc.model.Comment;
import com.backend.sharedoc.repository.CommentRepository;
import com.backend.sharedoc.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/pinboard")
public class CommentController {

  @Autowired
  private CommentRepository commentRepository;

  @Autowired
  private EntryRepository entryRepository;

  @GetMapping("/entries/{entryId}/comments")
  public List<Comment> getCommentsByEntryId(@PathVariable Long entryId) {
    return commentRepository.findByEntryId(entryId);
  }

  @PostMapping("/entries/{entryId}/comments")
  public Comment addComment(@PathVariable Long entryId, @Valid @RequestBody Comment comment) {
    return entryRepository.findById(entryId).map(entry -> {
      comment.setEntry(entry);
      return commentRepository.save(comment);
    }).orElseThrow(() -> new ResourceNotFoundException("Entry not found with id " + entryId));
  }

  @PutMapping("/entries/{entryId}/comments/{commentId}")
  public Comment updateComment(@PathVariable Long entryId, @PathVariable Long commentId,
                               @Valid @RequestBody Comment commentRequest) {
    if (!entryRepository.existsById(entryId)) {
      throw new ResourceNotFoundException("Entry not found with id " + entryId);
    }

    return commentRepository.findById(commentId).map(comment -> {
      comment.setText(commentRequest.getText());
      return commentRepository.save(comment);
    }).orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId));
  }

  @DeleteMapping("/entries/{entryId}/comments/{commentId}")
  public ResponseEntity<?> deleteComment(@PathVariable Long entryId, @PathVariable Long commentId) {
    if (!entryRepository.existsById(entryId)) {
      throw new ResourceNotFoundException("Entry not found with id " + entryId);
    }

    return commentRepository.findById(commentId).map(comment -> {
      commentRepository.delete(comment);
      return ResponseEntity.ok().build();
    }).orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId));

  }
}
