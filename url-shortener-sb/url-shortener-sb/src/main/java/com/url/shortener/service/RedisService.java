package com.url.shortener.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class RedisService {

    private final StringRedisTemplate redisTemplate;

    // Save short URL -> original URL
    public void saveUrl(String shortUrl, String originalUrl) {

        redisTemplate.opsForValue().set(
                shortUrl,
                originalUrl,
                Duration.ofHours(1)
        );
    }

    // Get original URL using short URL
    public String getUrl(String shortUrl) {

        return redisTemplate.opsForValue().get(shortUrl);
    }

    // Delete cached URL
    public void deleteUrl(String shortUrl) {

        redisTemplate.delete(shortUrl);
    }
}