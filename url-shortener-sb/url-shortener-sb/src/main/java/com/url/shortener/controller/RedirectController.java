//package com.url.shortener.controller;
//
//import com.url.shortener.models.UrlMapping;
//import com.url.shortener.service.UrlMappingService;
//import lombok.AllArgsConstructor;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@AllArgsConstructor
//public class RedirectController {
//    private UrlMappingService urlMappingService;
//
//    @GetMapping("/{shortUrl}")
//    public ResponseEntity<Void> redirect(@PathVariable String shortUrl){
//        UrlMapping urlMapping=urlMappingService.getOriginalUrl(shortUrl);
//        if(urlMapping!=null){
//            HttpHeaders httpHeaders=new HttpHeaders();
//            httpHeaders.add("Location",urlMapping.getOriginalUrl());
//            return ResponseEntity.status(302).headers(httpHeaders).build();
//        }else{
//            return ResponseEntity.notFound().build();
//        }
//
//    }
//}

package com.url.shortener.controller;

import com.url.shortener.service.UrlMappingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RedirectController {

    private UrlMappingService urlMappingService;


    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(
            @PathVariable String shortUrl) {

        // Get original URL from Redis/MySQL
        String originalUrl =
                urlMappingService.getOriginalUrl(shortUrl);

        // Short URL does not exist
        if (originalUrl == null) {

            return ResponseEntity
                    .notFound()
                    .build();
        }


        // Record analytics
        urlMappingService.recordClick(shortUrl);


        // Redirect user
        HttpHeaders httpHeaders =
                new HttpHeaders();

        httpHeaders.add(
                "Location",
                originalUrl
        );


        return ResponseEntity
                .status(302)
                .headers(httpHeaders)
                .build();
    }
}