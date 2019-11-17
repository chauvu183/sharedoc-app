package com.backend.sharedoc.service;

import com.backend.sharedoc.exception.DocumentStorageException;
import com.backend.sharedoc.exception.DocumentNotFoundException;
import com.backend.sharedoc.property.DocumentStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class DocumentStorageService {

    private final Path documentStorageLocation;

    @Autowired
    public DocumentStorageService(DocumentStorageProperties documentStorageProperties) {
        this.documentStorageLocation = Paths.get(documentStorageProperties.getUploadDir()).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.documentStorageLocation);
        } catch (Exception ex) {
            throw new DocumentStorageException(
                    "Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public String storeDocument(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new DocumentStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.documentStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new DocumentStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public Resource loadDocumentAsResource(String fileName) {
        try {
            Path filePath = this.documentStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new DocumentNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new DocumentNotFoundException("File not found " + fileName, ex);
        }
    }

    public void deleteDocument(String fileName) {
        Path fullPath = Paths.get(documentStorageLocation.toString(), fileName);

        try {
            Resource resource = new UrlResource(fullPath.toUri());
            if (resource.exists()) {
                Files.delete(fullPath);
            } else {
                throw new DocumentNotFoundException("File not found " + fileName);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
