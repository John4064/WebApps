package tech.parkhurst.contact;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactController {

    //Notes
    //Models are essentially objects that get created per instance.
    //So on call our model gets called and (addAttribute) creates new greeting object and adds
    //it to our model object, when we return greeting.html it uses our model we
    //can call greeting.content for example. more info: https://zetcode.com/springboot/model/

    @GetMapping("/greeting")
    public String greetingForm(Model model) {
        model.addAttribute("mycontact", new Contact());
        return "greeting";
    }

    @PostMapping("/greeting")
    public String greetingSubmit(@ModelAttribute Contact mycontact, Model model) {
        model.addAttribute("mycontact", mycontact);
        return "result";
    }


}