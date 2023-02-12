const HomePage = require('../pageobjects/home.page');



describe(' helpCentre page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('https://help.mandoemedia.com/'); 
        await browser.pause(2000) 
       
        
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        browser.refresh()
       
           
    });



//===================================================helpCentre section 1==============================================================================================================
    it('should save helpCentre  page section 1 screenshots', async () => {  
        await browser.saveScreen('helpCentre-01', { });
    }); 
    it('should compare helpCentre page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('helpCentre-01', { /* some options */ })).toEqual(0);
    });
//===================================================helpCentre page section 2 ================================================
    it('should save  helpCentre page section 2 screenshots', async () => {                        
        await(await HomePage.helpCentreScroll2).scrollIntoView()
        await browser.pause(2000)
        await browser.saveScreen('helpCentre-02', { });
    }); 
    it('should compare helpCentre page section 2  screenshots', async () => {
        await(await HomePage.helpCentreScroll2).scrollIntoView()
        await browser.pause(2000)
        await expect(await browser.checkScreen('helpCentre-02', { /* some options */ })).toEqual(0);
    });









   


});


