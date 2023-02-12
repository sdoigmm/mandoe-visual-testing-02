const HomePage = require('../pageobjects/home.page');



describe('Products hardware page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/guides/ids-getting-started-guide/'); 
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



//===================================================hardware section 1==============================================================================================================
    it('should save hardware  page section 1 screenshots', async () => {  
        await browser.saveScreen('Prod-getStarted-01', { });
    }); 
    it('should compare hardware page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Prod-getStarted-01', { /* some options */ })).toEqual(0);
    });
//===================================================hardware page section 2 ================================================
    it('should save  hardware page section 2 screenshots', async () => {                        
        await(await HomePage.hardwareScroll2).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-02', { });
    }); 
    it('should compare hardware page section 2  screenshots', async () => {
        await(await HomePage.hardwareScroll2).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-02', { /* some options */ })).toEqual(0);
    });
//===================================================hardware page section 3 ================================================
    it('should save  hardware page section 3 screenshots', async () => {     
        await(await HomePage.hardwareScroll3).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-03', { });
    }); 
    it('should compare hardware page section 3  screenshots', async () => {                   
        await(await HomePage.hardwareScroll3).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-03', { /* some options */ })).toEqual(0);
    });
    //===================================================hardware page section 4 ================================================
    it('should save  hardware page section 4 screenshots', async () => {     
        await(await HomePage.hardwareScroll4).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-04', { });
    }); 
    it('should compare hardware page section 4  screenshots', async () => {                   
        await(await HomePage.hardwareScroll4).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-04', { /* some options */ })).toEqual(0);
    });


    //===================================================hardware page section 5 ================================================
    it('should save  hardware page section 5 screenshots', async () => {     
        await(await HomePage.hardwareScroll5).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-05', { });
    }); 
    it('should compare hardware page section 5  screenshots', async () => {                   
        await(await HomePage.hardwareScroll5).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-05', { /* some options */ })).toEqual(0);
    });
    //===================================================hardware page section 6 ================================================
    it('should save  hardware page section 6 screenshots', async () => {     
        await(await HomePage.hardwareScroll6).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-06', { });
    }); 
    it('should compare hardware page section 6  screenshots', async () => {                   
        await(await HomePage.hardwareScroll6).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-06', { /* some options */ })).toEqual(0);
    });
     //===================================================hardware page section 7 ================================================
    it('should save  hardware page section 7 screenshots', async () => {     
        await(await HomePage.hardwareScroll7).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-07', { });
    }); 
    it('should compare hardware page section 7  screenshots', async () => {                   
        await(await HomePage.hardwareScroll7).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-07', { /* some options */ })).toEqual(0);
    });
   //===================================================hardware page section 8 ================================================
    it('should save  hardware page section 8 screenshots', async () => {     
        await(await HomePage.hardwareScroll8).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-08', { });
    }); 
    it('should compare hardware page section 8  screenshots', async () => {                   
        await(await HomePage.hardwareScroll8).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-08', { /* some options */ })).toEqual(0);
    });
        //===================================================hardware page section 9 ================================================
    it('should save  hardware page section 9 screenshots', async () => {     
        await(await HomePage.hardwareScroll9).scrollIntoView()
        await browser.saveScreen('Prod-getStarted-09', { });
    }); 
    it('should compare hardware page section 9  screenshots', async () => {                   
        await(await HomePage.hardwareScroll9).scrollIntoView()
        await expect(await browser.checkScreen('Prod-getStarted-09', { /* some options */ })).toEqual(0);
    });











   


});


