package tech.parkhurst.contact;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class EmailHandler {

    public static void sendEmail(String address, String name, int age){
        String fromAdd = "jparkhurst1124@icloud.com";
        try{
            String host = "localhost";
            // Get system properties
            Properties properties = System.getProperties();
            // Setup mail server
            properties.setProperty("mail.smtp.host", host);
            // Get the default Session object.
            Session session = Session.getDefaultInstance(properties);
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);
            // Set From: header field of the header.
            message.setFrom(new InternetAddress(fromAdd));
            // Set To
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(address));
            // Set Subject: header field
            message.setSubject("To %s".formatted(name));
            message.setText("Welcome to the test realm we are contacting you about information! We also were told your age was %d".formatted(age));
            //Send Here
            Transport.send(message);
            System.out.println("Sent message successfully....");
        }catch(MessagingException mex){
            mex.printStackTrace();
        }
        return;
    }

}
