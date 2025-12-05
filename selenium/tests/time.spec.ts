import { expect } from "chai";
import { Builder, By } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

describe("Selenium smoke test", function () {
  this.timeout(30000);
  let d;

  before(async () => {
    const options = new chrome.Options();
    //options.addArguments("--headless=new");

    d = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
  });

  after(async () => {
    if (d) await d.quit();
  });

  it("opens Google", async () => {
    await d.get("https://www.google.com");
    const box = await d.findElement(By.name("q"));
    expect(box).to.exist;
  });
});
