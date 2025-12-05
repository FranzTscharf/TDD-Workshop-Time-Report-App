
import {Builder} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function createDriver(){
 return await new Builder().forBrowser('chrome')
   .setChromeOptions(new chrome.Options().addArguments('--headless=new'))
   .build();
}
