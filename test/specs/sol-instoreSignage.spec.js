const HomePage = require('../pageobjects/home.page');



describe('Solutions instoreSignage', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/instore-signage/'); 
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












//===================================================instoreSignage page==============================================================================================================
    it('should save instoreSignage  page section 1 screenshots', async () => {  
        await browser.saveScreen('Sol-instoreSignage-01', { });
    }); 
    it('should compare instoreSignage page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Sol-instoreSignage-01', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 2 ================================================
    it('should save  instoreSignage page section 2 screenshots', async () => {                        
        await(await HomePage.digitalMenuBoardsScroll2).scrollIntoView()
      
        await browser.saveScreen('Sol-instoreSignage-02', { });
    }); 
    it('should compare instoreSignage page section 2  screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll2).scrollIntoView()
     
        await expect(await browser.checkScreen('Sol-instoreSignage-02', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 3 ================================================
    it('should save  instoreSignage page section 3 screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll3).scrollIntoView()
      
        await browser.saveScreen('Sol-instoreSignage-03', { });
    }); 
    it('should compare instoreSignage page section 3  screenshots', async () => {                  
        await(await HomePage.digitalMenuBoardsScroll3).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-instoreSignage-03', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 4 ================================================
    it('should save  instoreSignage page section 4 screenshots', async () => {                                 
        await(await HomePage.digitalMenuBoardsScroll4).scrollIntoView()
    
        await browser.saveScreen('Sol-instoreSignage-04', { });
    }); 
    it('should compare instoreSignage page section 4  screenshots', async () => {      
        await(await HomePage.digitalMenuBoardsScroll4).scrollIntoView()
     
        await expect(await browser.checkScreen('Sol-instoreSignage-04', { /* some options */ })).toEqual(0);
    });
    //===================================================instoreSignage page section 5 ================================================
    it('should save  instoreSignage page section 5 screenshots', async () => {                    
        await(await HomePage.digitalMenuBoardsScroll5).scrollIntoView()
       
        await browser.saveScreen('Sol-instoreSignage-05', { });
    }); 
    it('should compare instoreSignage page section 5  screenshots', async () => {  
        await(await HomePage.digitalMenuBoardsScroll5).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-instoreSignage-05', { /* some options */ })).toEqual(0);
    });
    //===================================================instoreSignage page section 6 ================================================
    it('should save  instoreSignage page section 6 screenshots', async () => {
        await(await HomePage.instoreSignageScroll6).scrollIntoView()
    
        await browser.saveScreen('Sol-instoreSignage-06', { });
    }); 
    it('should compare instoreSignage page section 6  screenshots', async () => {               
        await(await HomePage.instoreSignageScroll6).scrollIntoView()
     
        await expect(await browser.checkScreen('Sol-instoreSignage-06', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 7 ================================================
    it('should save  instoreSignage page section 7 screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll7).scrollIntoView()
     
        await browser.saveScreen('Sol-instoreSignage-07', { });
    }); 
    it('should compare instoreSignage page section 7  screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll7).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-instoreSignage-07', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 8 ================================================
    it('should save  instoreSignage page section 8 screenshots', async () => {                
        await(await HomePage.digitalMenuBoardsScroll8).scrollIntoView()
        
        await browser.saveScreen('Sol-instoreSignage-08', { });
    }); 
    it('should compare instoreSignage page section 8  screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll8).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-instoreSignage-08', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 9 ================================================
    it('should save  instoreSignage page section 9 screenshots', async () => {              
        await(await HomePage.digitalMenuBoardsScroll9).scrollIntoView()
     
        await browser.saveScreen('Sol-instoreSignage-09', { });
    }); 
    it('should compare instoreSignage page section 9  screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll9).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-instoreSignage-09', { /* some options */ })).toEqual(0);
    });
//===================================================instoreSignage page section 10 ================================================
    it('should save  instoreSignage page section 10 screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll10).scrollIntoView()
       
        await browser.saveScreen('Sol-instoreSignage-10', { });
    }); 
    it('should compare instoreSignage page section 10  screenshots', async () => {                 
        await(await HomePage.digitalMenuBoardsScroll10).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-instoreSignage-10', { /* some options */ })).toEqual(0);
    });













   


});


