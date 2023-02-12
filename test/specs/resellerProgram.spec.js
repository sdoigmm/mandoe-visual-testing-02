const HomePage = require('../pageobjects/home.page');



describe(' Reseller Program page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/reseller-program/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000000})
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



//===================================================resellerProgram section 1==============================================================================================================
    it('should save resellerProgram  page section 1 screenshots', async () => {  
        await browser.saveScreen('resellerProgram-01', { });
    }); 
    it('should compare resellerProgram page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('resellerProgram-01', { /* some options */ })).toEqual(0);
    });
//===================================================resellerProgram page section 2 ================================================
    it('should save  resellerProgram page section 2 screenshots', async () => {                        
        await(await HomePage.resellerProgramScroll2).scrollIntoView()
        await browser.saveScreen('resellerProgram-02', { });
    }); 
    it('should compare resellerProgram page section 2  screenshots', async () => {
        await(await HomePage.resellerProgramScroll2).scrollIntoView()
        await expect(await browser.checkScreen('resellerProgram-02', { /* some options */ })).toEqual(0);
    });
    //===================================================resellerProgram page section 3 ================================================
    it('should save  resellerProgram page section 3 screenshots', async () => {                        
        await(await HomePage.resellerProgramScroll3).scrollIntoView()
        await browser.saveScreen('resellerProgram-03', { });
    }); 
    it('should compare resellerProgram page section 3  screenshots', async () => {
        await(await HomePage.resellerProgramScroll3).scrollIntoView()
        await expect(await browser.checkScreen('resellerProgram-03', { /* some options */ })).toEqual(0);
    });
    //===================================================resellerProgram page section 4 ================================================
    it('should save  resellerProgram page section 4 screenshots', async () => {                        
        await(await HomePage.resellerProgramScroll4).scrollIntoView()
        await browser.saveScreen('resellerProgram-04', { });
    }); 
    it('should compare resellerProgram page section 4  screenshots', async () => {
        await(await HomePage.resellerProgramScroll4).scrollIntoView()
        await expect(await browser.checkScreen('resellerProgram-04', { /* some options */ })).toEqual(0);
    });
      //===================================================resellerProgram page section 5 ================================================
    it('should save  resellerProgram page section 5 screenshots', async () => {                        
        await(await HomePage.resellerProgramScroll5).scrollIntoView()
        await browser.saveScreen('resellerProgram-05', { });
    }); 
    it('should compare resellerProgram page section 5  screenshots', async () => {
        await(await HomePage.resellerProgramScroll5).scrollIntoView()
        await expect(await browser.checkScreen('resellerProgram-05', { /* some options */ })).toEqual(0);
    });









   


});


