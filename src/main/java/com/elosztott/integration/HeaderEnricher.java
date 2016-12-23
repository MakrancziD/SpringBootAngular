package com.elosztott.integration;

import org.springframework.messaging.Message;

import java.io.File;

/**
 * Created by makra on 2016. 12. 23..
 */
public class HeaderEnricher {

    public String enrichType(File file) {

        if(file.getName().contains("user")) {
            return "User";
        }
        else if(file.getName().contains("trans")) {
            return "Transaction";
        }
        return "Unknown";
    }
}
