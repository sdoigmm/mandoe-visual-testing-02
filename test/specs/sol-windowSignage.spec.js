const HomePage = require('../pageobjects/home.page');



describe('Solutions windowSignage', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/window-signage/');       
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












//===================================================windowSignage page==============================================================================================================
    it('should save windowSignage  page section 1 screenshots', async () => {  
        await browser.saveScreen('Sol-windowSignage-01', { });
    }); 
    it('should compare windowSignage page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Sol-windowSignage-01', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 2 ================================================
    it('should save  windowSignage page section 2 screenshots', async () => {                        
        await(await HomePage.digitalMenuBoardsScroll2).scrollIntoView()
       
        await browser.saveScreen('Sol-windowSignage-02', { });
    }); 
    it('should compare windowSignage page section 2  screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll2).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-windowSignage-02', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 3 ================================================
    it('should save  windowSignage page section 3 screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll3).scrollIntoView()
    
        await browser.saveScreen('Sol-windowSignage-03', { });
    }); 
    it('should compare windowSignage page section 3  screenshots', async () => {                  
        await(await HomePage.digitalMenuBoardsScroll3).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-windowSignage-03', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 4 ================================================
    it('should save  windowSignage page section 4 screenshots', async () => {                                 
        await(await HomePage.digitalMenuBoardsScroll4).scrollIntoView()
       
        await browser.saveScreen('Sol-windowSignage-04', { });
    }); 
    it('should compare windowSignage page section 4  screenshots', async () => {      
        await(await HomePage.digitalMenuBoardsScroll4).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-windowSignage-04', { /* some options */ })).toEqual(0);
    });
    //===================================================windowSignage page section 5 ================================================
    it('should save  windowSignage page section 5 screenshots', async () => {                    
        await(await HomePage.digitalMenuBoardsScroll5).scrollIntoView()
       
        await browser.saveScreen('Sol-windowSignage-05', { });
    }); 
    it('should compare windowSignage page section 5  screenshots', async () => {  
        await(await HomePage.digitalMenuBoardsScroll5).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-windowSignage-05', { /* some options */ })).toEqual(0);
    });
    //===================================================windowSignage page section 6 ================================================
    it('should save  windowSignage page section 6 screenshots', async () => {
        await(await HomePage.windowSignageScroll6).scrollIntoView()
        
        await browser.saveScreen('Sol-windowSignage-06', { });
    }); 
    it('should compare windowSignage page section 6  screenshots', async () => {               
        await(await HomePage.windowSignageScroll6).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-windowSignage-06', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 7 ================================================
    it('should save  windowSignage page section 7 screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll7).scrollIntoView()
        
        await browser.saveScreen('Sol-windowSignage-07', { });
    }); 
    it('should compare windowSignage page section 7  screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll7).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-windowSignage-07', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 8 ================================================
    it('should save  windowSignage page section 8 screenshots', async () => {                
        await(await HomePage.digitalMenuBoardsScroll8).scrollIntoView()
        
        await browser.saveScreen('Sol-windowSignage-08', { });
    }); 
    it('should compare windowSignage page section 8  screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll8).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-windowSignage-08', { /* some options */ })).toEqual(0);
    });
    
    
//===================================================windowSignage page section 9 ================================================
    it('should save  windowSignage page section 09 screenshots', async () => {              
        await(await HomePage.windowSignageScroll09).scrollIntoView()
       
        await browser.saveScreen('Sol-windowSignage-09', { });
    }); 
    it('should compare windowSignage page section 09  screenshots', async () => {               
        await(await HomePage.windowSignageScroll09).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-windowSignage-09', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 10 ================================================
    it('should save  windowSignage page section 10 screenshots', async () => {
        await(await HomePage.windowSignageScroll10).scrollIntoView()
        
        await browser.saveScreen('Sol-windowSignage-10', { });
    }); 
    it('should compare windowSignage page section 10  screenshots', async () => {                 
        await(await HomePage.windowSignageScroll10).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-windowSignage-10', { /* some options */ })).toEqual(0);
    });
//===================================================windowSignage page section 11 ================================================
    it('should save  windowSignage page section 11 screenshots', async () => {
        await(await HomePage.windowSignageScroll11).scrollIntoView()
        
        await browser.saveScreen('Sol-windowSignage-11', { });
    }); 
    it('should compare windowSignage page section 11  screenshots', async () => {                 
        await(await HomePage.windowSignageScroll11).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-windowSignage-11', { /* some options */ })).toEqual(0);
    });













   


});


