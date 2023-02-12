const HomePage = require('../pageobjects/home.page');

describe('Resources page', () => {
    beforeEach(async () => {  
        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad':1000000 })  
        await browser.refresh()
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')         
    });
//  //===================================================Resources- blog page secton 5 pages==============================================================================================================
    it('should save Resources-blog page screenshotsscreenshots', async () => { 
      await browser.url('en-gb/blog/');         
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      // await(await HomePage.intercomBtn).moveTo()                    
      await browser.saveFullPageScreen('UK-Res-blogPage', { });
    }); 
    it('should compare Resources-blog page screenshots', async () => {  
      await browser.url('en-gb/blog/');        
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      // await(await HomePage.intercomBtn).moveTo()   
      await expect(await browser.checkFullPageScreen('UK-Res-blogPage', { /* some options */ })).toEqual(0);
    });
    //================================Case studies=====================================================
    it('should save Resources-Case studies page screenshotsscreenshots', async () => { 
      await browser.url('en-gb/blog/topic/case-studies/');         
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      //await(await HomePage.intercomBtn).moveTo()             
      await browser.saveFullPageScreen('UK-Res-case-studiesPage', { });
    }); 
    it('should compare Resources-Case studies page screenshots', async () => {  
      await browser.url('en-gb/blog/topic/case-studies/');        
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      //await(await HomePage.intercomBtn).moveTo()            
      await expect(await browser.checkFullPageScreen('UK-Res-case-studiesPage', { /* some options */ })).toEqual(0);
    });
    ///  //===================================================Resources-about us page secton 1==============================================================================================================
    it('should save Resources-about-us page screenshotsscreenshots', async () => { 
      await browser.url('en-gb/about-us/');         
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      //await(await HomePage.intercomBtn).moveTo()             
      await browser.saveFullPageScreen('UK-Res-about-usPage', { });
    }); 
    it('should compare Resources-about-us page screenshots', async () => {  
      await browser.url('en-gb/about-us/');        
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      // await(await HomePage.intercomBtn).moveTo()                    
      await expect(await browser.checkFullPageScreen('UK-Res-about-usPage', { /* some options */ })).toEqual(0);
    });
    ///  //===================================================Resources-contact/sales/page secton 1==============================================================================================================
    it('should save Resources-contact/sales/ page screenshotsscreenshots', async () => { 
        await browser.url('en-gb/contact/sales/');         
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)
        // await(await HomePage.intercomBtn).moveTo()                 
        await browser.saveFullPageScreen('UK-Res-contact-salesPage', { });
    }); 
    it('should compare Resources-contact/sales/ page screenshots', async () => {  
      await browser.url('en-gb/contact/sales/');        
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      // await(await HomePage.intercomBtn).moveTo()                
      await expect(await browser.checkFullPageScreen('UK-Res-contact-salesPage', { /* some options */ })).toEqual(0);
    });
 ///  //===================================================Resources-contact/support/page secton 1==============================================================================================================
    it('should save Resources-contact/support/ page screenshotsscreenshots', async () => { 
      await browser.url('en-gb/contact/support/');         
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      //await(await HomePage.intercomBtn).moveTo()   
      await browser.saveFullPageScreen('UK-Res-contact-supportPage', { });
    }); 
    it('should compare Resources-contact/support/ page screenshots', async () => {  
      await browser.url('en-gb/contact/support/');        
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)
      //await(await HomePage.intercomBtn).moveTo()                   
      await expect(await browser.checkFullPageScreen('UK-Res-contact-supportPage', { /* some options */ })).toEqual(0);
    });
});