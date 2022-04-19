package tech.parkhurst.contact;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import tech.parkhurst.contact.EmailHandler.*;
@Controller
public class ContactController {

    //Notes
    //Models are essentially objects that get created per instance.
    //So on call our model gets called and (addAttribute) creates new greeting object and adds
    //it to our model object, when we return greeting.html it uses our model we
    //can call greeting.content for example. more info: https://zetcode.com/springboot/model/

    @GetMapping("/contact")
    public String greetingForm(Model model) {
        model.addAttribute("mycontact", new Contact());
        return "greeting";
    }

    @PostMapping("/contact")
    public String greetingSubmit(@ModelAttribute Contact mycontact, Model model) {
        model.addAttribute("mycontact", mycontact);
        System.out.println(mycontact.getEmailAdd());
        EmailHandler.sendEmail(mycontact.getEmailAdd(),mycontact.getName(),mycontact.getAge());
        return "result";
    }
    @GetMapping("/error")
    public String catchErr() {
        return "error";
    }

}