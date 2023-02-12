const HomePage = require('../pageobjects/home.page');



describe('caseStudies  page snapshots', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/blog/topic/case-studies/'); 
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












//===================================================caseStudies page==============================================================================================================
    it('should save caseStudies  page section 1 screenshots', async () => {  
        await browser.saveScreen('caseStudies-01', { });
    }); 
    it('should compare caseStudies page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('caseStudies-01', { /* some options */ })).toEqual(0);
    });
//===================================================caseStudies page section 2 ================================================
    it('should save  caseStudies page section 2 screenshots', async () => {                        
        await(await HomePage.caseStudiesScroll2).scrollIntoView()
       
        await browser.saveScreen('caseStudies-02', { });
    }); 
    it('should compare caseStudies page section 2  screenshots', async () => {
        await(await HomePage.caseStudiesScroll2).scrollIntoView()
       
        await expect(await browser.checkScreen('caseStudies-02', { /* some options */ })).toEqual(0);
    });
//===================================================caseStudies page section 3 ================================================
    it('should save  caseStudies page section 3 screenshots', async () => {
        await(await HomePage.caseStudiesScroll3).scrollIntoView()
       
        await browser.saveScreen('caseStudies-03', { });
    }); 
    it('should compare caseStudies page section 3  screenshots', async () => {                  
        await(await HomePage.caseStudiesScroll3).scrollIntoView()
       
        await expect(await browser.checkScreen('caseStudies-03', { /* some options */ })).toEqual(0);
    });
//===================================================caseStudies page section 4 ================================================
    it('should save  caseStudies page section 4 screenshots', async () => {                                 
        await(await HomePage.caseStudiesScroll4).scrollIntoView()
       
        await browser.saveScreen('caseStudies-04', { });
    }); 
    it('should compare caseStudies page section 4  screenshots', async () => {      
        await(await HomePage.caseStudiesScroll4).scrollIntoView()
       
        await expect(await browser.checkScreen('caseStudies-04', { /* some options */ })).toEqual(0);
    });
    
//===================================================caseStudies page section 5 ================================================
    it('should save  caseStudies page section 5 screenshots', async () => {                                 
        await(await HomePage.caseStudiesScroll5).scrollIntoView()
       
        await browser.saveScreen('caseStudies-05', { });
    }); 
    it('should compare caseStudies page section 5  screenshots', async () => {      
        await(await HomePage.caseStudiesScroll5).scrollIntoView()
       
        await expect(await browser.checkScreen('caseStudies-05', { /* some options */ })).toEqual(0);
    });
   
 










   


});


