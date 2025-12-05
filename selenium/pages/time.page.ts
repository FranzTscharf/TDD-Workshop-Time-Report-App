
import {By,WebDriver} from 'selenium-webdriver';

export class TimePage{
 constructor(private d:WebDriver){}
 async nav(){ await this.d.get('http://localhost:4200'); }
 employee=By.css('input[placeholder="Employee"]');
 start=By.css('input[type="datetime-local"]:nth-of-type(1)');
 end=By.css('input[type="datetime-local"]:nth-of-type(2)');
 save=By.xpath("//button[contains(., 'Save')]");
 async add(emp:string,s:string,e:string){
   await this.d.findElement(this.employee).sendKeys(emp);
   await this.d.findElement(this.start).sendKeys(s);
   await this.d.findElement(this.end).sendKeys(e);
   await this.d.findElement(this.save).click();
 }
}
