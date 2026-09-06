//package com.url.shortener.service;
//
//import com.url.shortener.dtos.ClickEventDTO;
//import com.url.shortener.dtos.UrlMappingDTO;
//import com.url.shortener.models.ClickEvent;
//import com.url.shortener.models.UrlMapping;
//import com.url.shortener.models.User;
//import com.url.shortener.repository.ClickEventRepository;
//import com.url.shortener.repository.UrlMappingRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Map;
//import java.util.Random;
//import java.util.stream.Collectors;
//
//@Service
//@AllArgsConstructor
//public class UrlMappingService {
//    private UrlMappingRepository urlMappingRepository;
//    private ClickEventRepository clickEventRepository;
//    private RedisService redisService;
//
//
//    public UrlMappingDTO createShortUrl(String originalUrl, User user) {
//
//        String shortUrl = generateShortUrl();
//
//        UrlMapping urlMapping = new UrlMapping();
//
//        urlMapping.setOriginalUrl(originalUrl);
//        urlMapping.setShortUrl(shortUrl);
//        urlMapping.setUser(user);
//        urlMapping.setCreatedDate(LocalDateTime.now());
//
//        UrlMapping savedUrlMapping =
//                urlMappingRepository.save(urlMapping);
//
//        // Store URL in Redis
//        redisService.saveUrl(
//                savedUrlMapping.getShortUrl(),
//                savedUrlMapping.getOriginalUrl()
//        );
//
//        return convertToDto(savedUrlMapping);
//    }
//    private UrlMappingDTO convertToDto(UrlMapping urlMapping){
//        UrlMappingDTO urlMappingDTO=new UrlMappingDTO();
//        urlMappingDTO.setId(urlMapping.getId());
//        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
//        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
//        urlMappingDTO.setClickCount(urlMapping.getClickCount());
//        urlMappingDTO.setCreatedDate(urlMapping.getCreatedDate());
//        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
//        return urlMappingDTO;
//    }
//    private String generateShortUrl() {
//        String characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//        Random random=new Random();
//        StringBuilder shortUrl=new StringBuilder(8);
//        for(int i=0;i<8;i++){
//            shortUrl.append(characters.charAt(random.nextInt(characters.length())));
//        }
//        return shortUrl.toString();
//    }
//
//    public List<UrlMappingDTO> getUrlByUser(User user) {
//         return urlMappingRepository.findByUser(user).stream()
//                 .map(this::convertToDto)
//                 .toList();
//    }
//
//    public List<ClickEventDTO> getClickEventByDate(String shortUrl, LocalDateTime start, LocalDateTime end) {
//        UrlMapping urlMapping=urlMappingRepository.findByShortUrl(shortUrl);
//        if(urlMapping!=null) {
//              return clickEventRepository.findByUrlMappingAndClickDateBetween(urlMapping,start,end)
//                      .stream()
//                      .collect(Collectors.groupingBy(click->click.getClickDate().toLocalDate(),Collectors.counting()))
//                      .entrySet().stream()
//                      .map(entry->{
//                          ClickEventDTO clickEventDTO=new ClickEventDTO();
//                          clickEventDTO.setClickDate(entry.getKey());
//                          clickEventDTO.setCount(entry.getValue());
//                          return clickEventDTO;
//                      })
//                      .collect(Collectors.toList());
//        }
//        return null;
//    }
//
//    public Map<LocalDate, Long> getTotalCLicksByUserAndDate(User user, LocalDate start, LocalDate end) {
//        List<UrlMapping> urlMappings=urlMappingRepository.findByUser(user);
//        List<ClickEvent> clickEvents=clickEventRepository.findByUrlMappingInAndClickDateBetween(urlMappings,start.atStartOfDay(),end.plusDays(1).atStartOfDay());
//        return clickEvents.stream()
//                .collect(Collectors.groupingBy(click->click.getClickDate().toLocalDate(),Collectors.counting()));
//    }
//
//    public UrlMapping getOriginalUrl(String shortUrl) {
//        UrlMapping urlMapping=urlMappingRepository.findByShortUrl(shortUrl);
//        if(urlMapping!=null){
//            urlMapping.setClickCount(urlMapping.getClickCount()+1);
//            urlMappingRepository.save(urlMapping);
//
//
//            //Record Click Event
//            ClickEvent clickEvent=new ClickEvent();
//            clickEvent.setClickDate(LocalDateTime.now());
//            clickEvent.setUrlMapping(urlMapping);
//            clickEventRepository.save(clickEvent);
//        }
//        return urlMapping;
//
//
//    }
//}

package com.url.shortener.service;

import com.url.shortener.dtos.ClickEventDTO;
import com.url.shortener.dtos.UrlMappingDTO;
import com.url.shortener.models.ClickEvent;
import com.url.shortener.models.UrlMapping;
import com.url.shortener.models.User;
import com.url.shortener.repository.ClickEventRepository;
import com.url.shortener.repository.UrlMappingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UrlMappingService {

    private UrlMappingRepository urlMappingRepository;
    private ClickEventRepository clickEventRepository;
    private RedisService redisService;


    // ==========================================
    // CREATE SHORT URL
    // ==========================================

    public UrlMappingDTO createShortUrl(String originalUrl, User user) {

        String shortUrl = generateShortUrl();

        UrlMapping urlMapping = new UrlMapping();

        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setShortUrl(shortUrl);
        urlMapping.setUser(user);
        urlMapping.setCreatedDate(LocalDateTime.now());

        UrlMapping savedUrlMapping =
                urlMappingRepository.save(urlMapping);



        return convertToDto(savedUrlMapping);
    }


    // ==========================================
    // CONVERT ENTITY TO DTO
    // ==========================================

    private UrlMappingDTO convertToDto(UrlMapping urlMapping) {

        UrlMappingDTO urlMappingDTO = new UrlMappingDTO();

        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreatedDate());
        urlMappingDTO.setUsername(
                urlMapping.getUser().getUsername()
        );

        return urlMappingDTO;
    }


    // ==========================================
    // GENERATE SHORT URL
    // ==========================================

    private String generateShortUrl() {

        String characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        Random random = new Random();

        StringBuilder shortUrl =
                new StringBuilder(8);

        for (int i = 0; i < 8; i++) {

            shortUrl.append(
                    characters.charAt(
                            random.nextInt(characters.length())
                    )
            );
        }

        return shortUrl.toString();
    }


    // ==========================================
    // GET USER'S URLS
    // ==========================================

    public List<UrlMappingDTO> getUrlByUser(User user) {

        return urlMappingRepository.findByUser(user)
                .stream()
                .map(this::convertToDto)
                .toList();
    }


    // ==========================================
    // GET INDIVIDUAL URL ANALYTICS
    // ==========================================

    public List<ClickEventDTO> getClickEventByDate(
            String shortUrl,
            LocalDateTime start,
            LocalDateTime end) {

        UrlMapping urlMapping =
                urlMappingRepository.findByShortUrl(shortUrl);

        if (urlMapping != null) {

            return clickEventRepository
                    .findByUrlMappingAndClickDateBetween(
                            urlMapping,
                            start,
                            end
                    )
                    .stream()
                    .collect(
                            Collectors.groupingBy(
                                    click -> click
                                            .getClickDate()
                                            .toLocalDate(),
                                    Collectors.counting()
                            )
                    )
                    .entrySet()
                    .stream()
                    .map(entry -> {

                        ClickEventDTO clickEventDTO =
                                new ClickEventDTO();

                        clickEventDTO.setClickDate(
                                entry.getKey()
                        );

                        clickEventDTO.setCount(
                                entry.getValue()
                        );

                        return clickEventDTO;
                    })
                    .collect(Collectors.toList());
        }

        return null;
    }


    // ==========================================
    // GET TOTAL CLICKS BY DATE
    // ==========================================

    public Map<LocalDate, Long> getTotalCLicksByUserAndDate(
            User user,
            LocalDate start,
            LocalDate end) {

        List<UrlMapping> urlMappings =
                urlMappingRepository.findByUser(user);

        List<ClickEvent> clickEvents =
                clickEventRepository
                        .findByUrlMappingInAndClickDateBetween(
                                urlMappings,
                                start.atStartOfDay(),
                                end.plusDays(1).atStartOfDay()
                        );

        return clickEvents.stream()
                .collect(
                        Collectors.groupingBy(
                                click -> click
                                        .getClickDate()
                                        .toLocalDate(),
                                Collectors.counting()
                        )
                );
    }


    // ==========================================
    // GET ORIGINAL URL
    // REDIS FIRST
    // ==========================================

    public String getOriginalUrl(String shortUrl) {

        // 1. Check Redis
        String cachedUrl =
                redisService.getUrl(shortUrl);

        if (cachedUrl != null) {

            System.out.println(
                    "REDIS CACHE HIT: " + shortUrl
            );

            return cachedUrl;
        }


        // 2. Redis MISS -> MySQL
        System.out.println(
                "REDIS CACHE MISS: " + shortUrl
        );

        UrlMapping urlMapping =
                urlMappingRepository.findByShortUrl(shortUrl);

        if (urlMapping == null) {
            return null;
        }


        // 3. Store in Redis
        redisService.saveUrl(
                urlMapping.getShortUrl(),
                urlMapping.getOriginalUrl()
        );


        // 4. Return original URL
        return urlMapping.getOriginalUrl();
    }


    // ==========================================
    // RECORD CLICK
    // ==========================================

    public void recordClick(String shortUrl) {

        UrlMapping urlMapping =
                urlMappingRepository.findByShortUrl(shortUrl);

        if (urlMapping == null) {
            return;
        }


        // Update click count
        urlMapping.setClickCount(
                urlMapping.getClickCount() + 1
        );

        urlMappingRepository.save(urlMapping);


        // Create click event
        ClickEvent clickEvent =
                new ClickEvent();

        clickEvent.setClickDate(
                LocalDateTime.now()
        );

        clickEvent.setUrlMapping(
                urlMapping
        );

        clickEventRepository.save(
                clickEvent
        );
    }
}