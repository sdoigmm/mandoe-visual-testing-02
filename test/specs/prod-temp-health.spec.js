const HomePage = require('../pageobjects/home.page');



describe('Products template health page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/health/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000000})
        await(await HomePage.locationtxt).moveTo() 
        await browser.pause(2000)
        await(await HomePage.locationtxt).click()
        await browser.pause(2000)
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        browser.refresh()
    
        
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        
       
           
    });



// //===================================================temp-health- page secton 1==============================================================================================================
    it('should save temp-health-health  page section 1 screenshots', async () => {
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-health-01', { });
    }); 
    it('should compare temp-health page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-health-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 2 ================================================
    it('should save  temp-health page section 2 screenshots', async () => {                        
        await(await HomePage.temphealthScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-health-02', { });
    }); 
    it('should compare temp-health page section 2  screenshots', async () => {
        await(await HomePage.temphealthScroll2).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('prod-temp-health-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 3 ================================================
    it('should save  temp-health page section 3 screenshots', async () => {
        await(await HomePage.temphealthScroll3).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-health-03', { });
    }); 
    it('should compare temp-health page section 3  screenshots', async () => {                
        await(await HomePage.temphealthScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-health-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 4 ================================================
    it('should save  temp-health page section 4 screenshots', async () => {                 
        await(await HomePage.temphealthScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-health-04', { });
    }); 
    it('should compare temp-health page section 4  screenshots', async () => {
        await(await HomePage.temphealthScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-health-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-health page section 5 ================================================
    it('should save  temp-health page section 5 screenshots', async () => {                 
        await(await HomePage.temphealthScroll5).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('prod-temp-health-05', { });
    }); 
    it('should compare temp-health page section 5  screenshots', async () => {
        await(await HomePage.temphealthScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-health-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-health page section 6 ================================================
    it('should save  temp-health page section 6 screenshots', async () => {
        await(await HomePage.temphealthScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-health-06', { });
    }); 
    it('should compare temp-health page section 6  screenshots', async () => {                
        await(await HomePage.temphealthScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-health-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 7 ================================================
    it('should save  temp-health page section 7 screenshots', async () => {               
        await(await HomePage.temphealthScroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-health-07', { });
    }); 
    it('should compare temp-health page section 7  screenshots', async () => {                
        await(await HomePage.temphealthScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-health-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 8 ================================================
    it('should save  temp-health page section 8 screenshots', async () => {                
        await(await HomePage.temphealthScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-health-08', { });
    }); 
    it('should compare temp-health page section 8  screenshots', async () => {
        await(await HomePage.temphealthScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-health-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 9 ================================================
    it('should save  temp-health page section 9 screenshots', async () => {                   
        await(await HomePage.temphealthScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-health-09', { });
    }); 
    it('should compare temp-health page section 9  screenshots', async () => {                
        await(await HomePage.temphealthScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-health-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 10 ================================================
    it('should save  temp-health page section 10 screenshots', async () => {
        await(await HomePage.temphealthScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-health-10', { });
    }); 
    it('should compare temp-health page section 10  screenshots', async () => {              
        await(await HomePage.temphealthScroll10).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-health-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-health page section 11 ================================================
    it('should save  temp-health page section 11 screenshots', async () => {                
        await(await HomePage.temphealthScroll11).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('prod-temp-health-11', { });
    }); 
    it('should compare temp-health page section 11  screenshots', async () => {              
        await(await HomePage.temphealthScroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-health-11', { /* some options */ })).toEqual(0);
    });













   


});