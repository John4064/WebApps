package tech.parkhurst.contact;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class EmailHandler {

    public static void sendEmail(String address, String name, int age){
        String fromAdd = "tidaldevs@gmail.com";
        final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
        try{
            // Get system properties
            Properties props = System.getProperties();
            // Setup mail server & properties
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
            props.setProperty("mail.smtp.socketFactory.fallback", "false");
            props.setProperty("mail.smtp.port", "465");
            props.setProperty("mail.smtp.socketFactory.port", "465");
            props.put("mail.smtp.auth", "true");
            props.put("mail.debug", "true");
            props.put("mail.store.protocol", "pop3");
            props.put("mail.transport.protocol", "smtp");
            props.put("mail.smtp.starttls.required", "true");
            props.put("mail.smtp.ssl.protocols", "TLSv1.2");
            final String password = "Panda1234";
            // Get the default Session object.
            Session session = Session.getDefaultInstance(props,
                    new Authenticator(){
                        protected PasswordAuthentication getPasswordAuthentication() {
                            return new PasswordAuthentication(fromAdd, password);
                        }});
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);
            // Set From: header field of the header.
            message.setFrom(new InternetAddress(fromAdd));
            // Set To
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(address));
            // Set Subject: header field
            message.setSubject("To %s".formatted(name));
            message.setText("Hello %s we are reaching out in regards to the contact form you filled out! We know you are %d from the form and this is just an automated message!".formatted(name,age));
            message.setSentDate(new Date());
            //Send Here
            Transport.send(message);
            System.out.println("Sent message successfully....");
        }catch(MessagingException mex){
            mex.printStackTrace();
        }
        return;
    }

}
