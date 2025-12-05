import { expect } from "chai";
import { Builder, By } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

describe("Selenium smoke test", function () {
  this.timeout(30000);
  let d;

  before(async () => {
    // 1. Path to your downloaded chromedriver.exe
    const chromeDriverPath = "C:\\Users\\Dozent\\Downloads\\TDD-Workshop-Time-Report-App-main\\selenium\\chromedriver.exe";

    // <-- CHANGE THIS to your real path

    // 2. Tell Selenium where the driver is
    const service = new chrome.ServiceBuilder(chromeDriverPath);

    // 3. Options (disable headless for now)
    const options = new chrome.Options();
    // options.addArguments("--headless=new");

    // 4. Build the driver with the service + options
    d = await new Builder()
      .forBrowser("chrome")
      .setChromeService(service)
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
