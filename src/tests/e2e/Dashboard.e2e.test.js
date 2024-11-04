// src/tests/e2e/Dashboard.e2e.test.js

import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { expect } from 'chai';

//const { Builder, By, until } = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');
//const { expect } = require('chai');

describe('Dashboard E2E Test', function () {
    this.timeout(30000);
    let driver;

    /*
    before(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new Options().headless())
            .build();
    });
    */
   
    before(async () => {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(new Options().headless()).build();
    });

    after(async () => {
        await driver.quit();
    });

    it('should display panels with correct data', async () => {
        await driver.get('http://localhost:3000');

        const panel1 = await driver.findElement(By.xpath("//h3[text()='Panel 1']/following-sibling::p"));
        const panel2 = await driver.findElement(By.xpath("//h3[text()='Panel 2']/following-sibling::p"));

        expect(await panel1.getText()).to.equal('100');
        expect(await panel2.getText()).to.equal('200');
    });
});
