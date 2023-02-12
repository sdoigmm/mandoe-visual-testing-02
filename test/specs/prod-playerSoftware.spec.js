const HomePage = require('../pageobjects/home.page');



describe('Products playerSoft page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/download-player/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000})
        await(await HomePage.locationtxt).moveTo() 
        await browser.pause(2000)
        await(await HomePage.locationtxt).click()
        await browser.pause(2000)
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(2000)
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        browser.refresh()
        
       
           
    });



//===================================================playerSoft section 1==============================================================================================================
    it('should save playerSoft  page section 1 screenshots', async () => {  
        await browser.saveScreen('Prod-playerSoft-01', { });
    }); 
    it('should compare playerSoft page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Prod-playerSoft-01', { /* some options */ })).toEqual(0);
    });
//===================================================playerSoft page section 2 ================================================
    it('should save  playerSoft page section 2 screenshots', async () => {                        
        await(await HomePage.playerSoftScroll2).scrollIntoView()
        await browser.saveScreen('Prod-playerSoft-02', { });
    }); 
    it('should compare playerSoft page section 2  screenshots', async () => {
        await(await HomePage.playerSoftScroll2).scrollIntoView()
        await expect(await browser.checkScreen('Prod-playerSoft-02', { /* some options */ })).toEqual(0);
    });
//===================================================playerSoft page section 3 ================================================
    it('should save  playerSoft page section 3 screenshots', async () => {     
        await(await HomePage.playerSoftScroll3).scrollIntoView()
        await browser.saveScreen('Prod-playerSoft-03', { });
    }); 
    it('should compare playerSoft page section 3  screenshots', async () => {                   
        await(await HomePage.playerSoftScroll3).scrollIntoView()
        await expect(await browser.checkScreen('Prod-playerSoft-03', { /* some options */ })).toEqual(0);
    });
//===================================================playerSoft page section 4 ================================================
    it('should save  playerSoft page section 4 screenshots', async () => {     
        await(await HomePage.playerSoftScroll4).scrollIntoView()
        await browser.saveScreen('Prod-playerSoft-04', { });
    }); 
    it('should compare playerSoft page section 4  screenshots', async () => {                   
        await(await HomePage.playerSoftScroll4).scrollIntoView()
        await expect(await browser.checkScreen('Prod-playerSoft-04', { /* some options */ })).toEqual(0);
    });











   


});


