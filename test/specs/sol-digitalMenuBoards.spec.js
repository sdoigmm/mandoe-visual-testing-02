const HomePage = require('../pageobjects/home.page');



describe('Solutions digitalMenuBoards', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/digital-menuboards/');                       
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












//===================================================digitalMenuBoards page==============================================================================================================
    it('should save digitalMenuBoards  page section 1 screenshots', async () => {  
        await browser.saveScreen('Sol-digitalMenuBoards-01', { });
    }); 
    it('should compare digitalMenuBoards page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-01', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 2 ================================================
    it('should save  digitalMenuBoards page section 2 screenshots', async () => {                        
        await(await HomePage.digitalMenuBoardsScroll2).scrollIntoView()

        await browser.saveScreen('Sol-digitalMenuBoards-02', { });
    }); 
    it('should compare digitalMenuBoards page section 2  screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll2).scrollIntoView()
   
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-02', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 3 ================================================
    it('should save  digitalMenuBoards page section 3 screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll3).scrollIntoView()
      
        await browser.saveScreen('Sol-digitalMenuBoards-03', { });
    }); 
    it('should compare digitalMenuBoards page section 3  screenshots', async () => {                  
        await(await HomePage.digitalMenuBoardsScroll3).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-03', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 4 ================================================
    it('should save  digitalMenuBoards page section 4 screenshots', async () => {                                 
        await(await HomePage.digitalMenuBoardsScroll4).scrollIntoView()
        
        await browser.saveScreen('Sol-digitalMenuBoards-04', { });
    }); 
    it('should compare digitalMenuBoards page section 4  screenshots', async () => {      
        await(await HomePage.digitalMenuBoardsScroll4).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-04', { /* some options */ })).toEqual(0);
    });
    //===================================================digitalMenuBoards page section 5 ================================================
    it('should save  digitalMenuBoards page section 5 screenshots', async () => {                    
        await(await HomePage.digitalMenuBoardsScroll5).scrollIntoView()
        
        await browser.saveScreen('Sol-digitalMenuBoards-05', { });
    }); 
    it('should compare digitalMenuBoards page section 5  screenshots', async () => {  
        await(await HomePage.digitalMenuBoardsScroll5).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-05', { /* some options */ })).toEqual(0);
    });
    //===================================================digitalMenuBoards page section 6 ================================================
    it('should save  digitalMenuBoards page section 6 screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll6).scrollIntoView()
        
        await browser.saveScreen('Sol-digitalMenuBoards-06', { });
    }); 
    it('should compare digitalMenuBoards page section 6  screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll6).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-06', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 7 ================================================
    it('should save  digitalMenuBoards page section 7 screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll7).scrollIntoView()
    
        await browser.saveScreen('Sol-digitalMenuBoards-07', { });
    }); 
    it('should compare digitalMenuBoards page section 7  screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll7).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-07', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 8 ================================================
    it('should save  digitalMenuBoards page section 8 screenshots', async () => {                
        await(await HomePage.digitalMenuBoardsScroll8).scrollIntoView()
      
        await browser.saveScreen('Sol-digitalMenuBoards-08', { });
    }); 
    it('should compare digitalMenuBoards page section 8  screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll8).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-08', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 9 ================================================
    it('should save  digitalMenuBoards page section 9 screenshots', async () => {              
        await(await HomePage.digitalMenuBoardsScroll9).scrollIntoView()
        
        await browser.saveScreen('Sol-digitalMenuBoards-09', { });
    }); 
    it('should compare digitalMenuBoards page section 9  screenshots', async () => {               
        await(await HomePage.digitalMenuBoardsScroll9).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-09', { /* some options */ })).toEqual(0);
    });
//===================================================digitalMenuBoards page section 10 ================================================
    it('should save  digitalMenuBoards page section 10 screenshots', async () => {
        await(await HomePage.digitalMenuBoardsScroll10).scrollIntoView()
       
        await browser.saveScreen('Sol-digitalMenuBoards-10', { });
    }); 
    it('should compare digitalMenuBoards page section 10  screenshots', async () => {                 
        await(await HomePage.digitalMenuBoardsScroll10).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-digitalMenuBoards-10', { /* some options */ })).toEqual(0);
    });













   


});


