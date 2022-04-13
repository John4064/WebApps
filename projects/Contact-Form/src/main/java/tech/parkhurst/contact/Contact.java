package tech.parkhurst.contact;

public class Contact {

    //Fields
    private String name;
    private int age;
    private String emailAdd;

    public String getName(){
        return name;
    }

    public String getEmailAdd(){
        return emailAdd;
    }

    public int getAge(){
        return age;
    }

    public void setName(String tempName){
        this.name = tempName;
    }

    public void setAge(int tempAge){
        this.age = tempAge;
    }

    public void setEmailAdd(String tempEmail){
        this.emailAdd = tempEmail;
    }



}
