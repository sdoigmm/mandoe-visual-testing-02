const HomePage = require('../pageobjects/home.page');



describe('Solutions Partner Program', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/partner-program/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:900000000})
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


//===================================================partnerProgram page==============================================================================================================
    it('should save partnerProgram  page section 1 screenshots', async () => {  
        await browser.saveScreen('Sol-partnerProgram-01', { });
    }); 
    it('should compare partnerProgram page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Sol-partnerProgram-01', { /* some options */ })).toEqual(0);
    });
//===================================================partnerProgram page section 2 ================================================
    it('should save  partnerProgram page section 2 screenshots', async () => {                        
        await(await HomePage.partnerProgramScroll2).scrollIntoView()
      
        await browser.saveScreen('Sol-partnerProgram-02', { });
    }); 
    it('should compare partnerProgram page section 2  screenshots', async () => {
        await(await HomePage.partnerProgramScroll2).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-partnerProgram-02', { /* some options */ })).toEqual(0);
    });
//===================================================partnerProgram page section 3 ================================================
    it('should save  partnerProgram page section 3 screenshots', async () => {
        await(await HomePage.partnerProgramScroll3).scrollIntoView()
      
        await browser.saveScreen('Sol-partnerProgram-03', { });
    }); 
    it('should compare partnerProgram page section 3  screenshots', async () => {                  
        await(await HomePage.partnerProgramScroll3).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-partnerProgram-03', { /* some options */ })).toEqual(0);
    });
//===================================================partnerProgram page section 4 ================================================
    it('should save  partnerProgram page section 4 screenshots', async () => {                                 
        await(await HomePage.partnerProgramScroll4).scrollIntoView()
      
        await browser.saveScreen('Sol-partnerProgram-04', { });
    }); 
    it('should compare partnerProgram page section 4  screenshots', async () => {      
        await(await HomePage.partnerProgramScroll4).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-partnerProgram-04', { /* some options */ })).toEqual(0);
    });
    //===================================================partnerProgram page section 5 ================================================
    it('should save  partnerProgram page section 5 screenshots', async () => {                    
        await(await HomePage.partnerProgramScroll5).scrollIntoView()
      
        await browser.saveScreen('Sol-partnerProgram-05', { });
    }); 
    it('should compare partnerProgram page section 5  screenshots', async () => {  
        await(await HomePage.partnerProgramScroll5).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-partnerProgram-05', { /* some options */ })).toEqual(0);
    });
    //===================================================partnerProgram page section 6 ================================================
    it('should save  partnerProgram page section 6 screenshots', async () => {
        await(await HomePage.partnerProgramScroll6).scrollIntoView()
      
        await browser.saveScreen('Sol-partnerProgram-06', { });
    }); 
    it('should compare partnerProgram page section 6  screenshots', async () => {               
        await(await HomePage.partnerProgramScroll6).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-partnerProgram-06', { /* some options */ })).toEqual(0);
    });
//===================================================partnerProgram page section 7 ================================================
    it('should save  partnerProgram page section 7 screenshots', async () => {               
        await(await HomePage.partnerProgramScroll7).scrollIntoView()
      
        await browser.saveScreen('Sol-partnerProgram-07', { });
    }); 
    it('should compare partnerProgram page section 7  screenshots', async () => {               
        await(await HomePage.partnerProgramScroll7).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-partnerProgram-07', { /* some options */ })).toEqual(0);
    });
//===================================================partnerProgram page section 8 ================================================
    it('should save  partnerProgram page section 8 screenshots', async () => {                
        await(await HomePage.partnerProgramScroll8).scrollIntoView()
        await browser.pause(3000)
        await browser.saveScreen('Sol-partnerProgram-08', { });
    }); 
    it('should compare partnerProgram page section 8  screenshots', async () => {
        await(await HomePage.partnerProgramScroll8).scrollIntoView()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-partnerProgram-08', { /* some options */ })).toEqual(0);
    });


   
    













   


});


