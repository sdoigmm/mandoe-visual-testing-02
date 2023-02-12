const HomePage = require('../pageobjects/home.page');



describe('Products template Realestate page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/real-estate/'); 
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



// //===================================================temp-Realestate- page secton 1==============================================================================================================
    it('should save temp-Realestate  page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-Realestate-01', { });
    }); 
    it('should compare temp-Realestate page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-Realestate-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Realestate page section 2 ================================================
    it('should save  temp-Realestate page section 2 screenshots', async () => {                        
        await(await HomePage.tempRealestateScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-Realestate-02', { });
    }); 
    it('should compare temp-Realestate page section 2  screenshots', async () => {
        await(await HomePage.tempRealestateScroll2).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('prod-temp-Realestate-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Realestate page section 3 ================================================
    it('should save  temp-Realestate page section 3 screenshots', async () => {
        await(await HomePage.tempRealestateScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-Realestate-03', { });
    }); 
    it('should compare temp-Realestate page section 3  screenshots', async () => {                
        await(await HomePage.tempRealestateScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await expect(await browser.checkScreen('prod-temp-Realestate-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Realestate page section 4 ================================================
    it('should save  temp-Realestate page section 4 screenshots', async () => {                 
        await(await HomePage.tempRealestateScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-Realestate-04', { });
    }); 
    it('should compare temp-Realestate page section 4  screenshots', async () => {
        await(await HomePage.tempRealestateScroll4).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-Realestate-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-Realestate page section 5 ================================================
    it('should save  temp-Realestate page section 5 screenshots', async () => {                 
        await(await HomePage.tempRealestateScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-Realestate-05', { });
    }); 
    it('should compare temp-Realestate page section 5  screenshots', async () => {
        await(await HomePage.tempRealestateScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-Realestate-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-Realestate page section 6 ================================================
    it('should save  temp-Realestate page section 6 screenshots', async () => {
        await(await HomePage.tempRealestateScroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-Realestate-06', { });
    }); 
    it('should compare temp-Realestate page section 6  screenshots', async () => {                
        await(await HomePage.tempRealestateScroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-Realestate-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Realestate page section 7 ================================================
    it('should save  temp-Realestate page section 7 screenshots', async () => {               
        await(await HomePage.tempRealestateScroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-Realestate-07', { });
    }); 
    it('should compare temp-Realestate page section 7  screenshots', async () => {                
        await(await HomePage.tempRealestateScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-Realestate-07', { /* some options */ })).toEqual(0);
    });













   


});