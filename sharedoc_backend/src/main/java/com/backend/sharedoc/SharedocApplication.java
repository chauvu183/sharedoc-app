package com.backend.sharedoc;

import com.backend.sharedoc.property.DocumentStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		DocumentStorageProperties.class
})
public class SharedocApplication {

	public static void main(String[] args) {
		SpringApplication.run(SharedocApplication.class, args);
	}
}
