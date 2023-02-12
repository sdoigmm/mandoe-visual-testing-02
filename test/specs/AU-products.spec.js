const HomePage = require('../pageobjects/home.page');

describe('Products page', () => {

    beforeEach(async () => {

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 1000000 })
        await browser.refresh()
    });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')

    });

    //  //===================================================Products- Features page secton 6 pages==============================================================================================================
    it('should save Products-Features page screenshotsscreenshots', async () => {
        await browser.url('en-au/features/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000)       
        await browser.saveFullPageScreen('AU-prod-featuresPage', {});
    });
    it('should compare Products-Features page screenshots', async () => {
        await browser.url('en-au/features/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-prod-featuresPage', { /* some options */ })).toEqual(0);
    });
    //  //===================================================Products- templates page secton 1==============================================================================================================
    it('should save Products-Templates page screenshots', async () => {
        await browser.url('en-au/templates/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 

        await browser.saveFullPageScreen('AU-prod-templatesPage', {});
    });
    it('should compare Products-Templates page screenshots', async () => {
        await browser.url('en-au/templates/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-prod-templatesPage', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- how-it-works page secton 1==============================================================================================================
    it('should save Products-how-it-works page screenshots', async () => {
        await browser.url('en-au/how-it-works/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('AU-prod-how-it-worksPage', {});
    });
    it('should compare Products-how-it-works page screenshots', async () => {
        await browser.url('en-au/how-it-works/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-prod-how-it-worksPage', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- industries2 page secton 1==============================================================================================================
    it('should save Products-industries2 page screenshots', async () => {
        await browser.url('en-au/industries2/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('AU-prod-industries2Page', {});
    });
    it('should compare Products-industries2 page screenshots', async () => {
        await browser.url('en-au/industries2/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-prod-industries2Page', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- ids-getting-started-guide page secton 1==============================================================================================================
    it('should save Products-ids-getting-started-guide page screenshots', async () => {
        await browser.url('en-au/ids-getting-started-guide/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('AU-prod-ids-getting-started-guidePage', {});
    });
    it('should compare Products-ids-getting-started-guide page screenshots', async () => {
        await browser.url('en-au/ids-getting-started-guide/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-prod-ids-getting-started-guidePage', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- download-player page secton 1==============================================================================================================
    it('should save Products-download-player page screenshots', async () => {
        await browser.url('en-au/download-player/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('AU-prod-download-playerPage', {});
    });
    it('should compare Products-download-player page screenshots', async () => {
        await browser.url('en-au/download-player/');
        await browser.pause(4000)
        // await (await HomePage.talktoSales).moveTo()
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-prod-download-playerPage', { /* some options */ })).toEqual(0);
    });
});