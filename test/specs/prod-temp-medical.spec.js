const HomePage = require('../pageobjects/home.page');



describe('Products template medical page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/medical/'); 
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



// //===================================================temp-medical- page secton 1==============================================================================================================
    it('should save temp-medical  page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-medical-01', { });
    }); 
    it('should compare temp-medical page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-medical-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 2 ================================================
    it('should save  temp-medical page section 2 screenshots', async () => {                        
        await(await HomePage.tempmedicalScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-medical-02', { });
    }); 
    it('should compare temp-medical page section 2  screenshots', async () => {
        await(await HomePage.tempmedicalScroll2).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('prod-temp-medical-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 3 ================================================
    it('should save  temp-medical page section 3 screenshots', async () => {
        await(await HomePage.tempmedicalScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-medical-03', { });
    }); 
    it('should compare temp-medical page section 3  screenshots', async () => {                
        await(await HomePage.tempmedicalScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-medical-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 4 ================================================
    it('should save  temp-medical page section 4 screenshots', async () => {                 
        await(await HomePage.tempmedicalScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-medical-04', { });
    }); 
    it('should compare temp-medical page section 4  screenshots', async () => {
        await(await HomePage.tempmedicalScroll4).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-medical-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-medical page section 5 ================================================
    it('should save  temp-medical page section 5 screenshots', async () => {                 
        await(await HomePage.tempmedicalScroll5).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('prod-temp-medical-05', { });
    }); 
    it('should compare temp-medical page section 5  screenshots', async () => {
        await(await HomePage.tempmedicalScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-medical-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-medical page section 6 ================================================
    it('should save  temp-medical page section 6 screenshots', async () => {
        await(await HomePage.tempmedicalScroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-medical-06', { });
    }); 
    it('should compare temp-medical page section 6  screenshots', async () => {                
        await(await HomePage.tempmedicalScroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('prod-temp-medical-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 7 ================================================
    it('should save  temp-medical page section 7 screenshots', async () => {               
        await(await HomePage.tempmedicalScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-medical-07', { });
    }); 
    it('should compare temp-medical page section 7  screenshots', async () => {                
        await(await HomePage.tempmedicalScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-medical-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 8 ================================================
    it('should save  temp-medical page section 8 screenshots', async () => {                
        await(await HomePage.tempmedicalScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-medical-08', { });
    }); 
    it('should compare temp-medical page section 8  screenshots', async () => {
        await(await HomePage.tempmedicalScroll8).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-medical-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 9 ================================================
    it('should save  temp-medical page section 9 screenshots', async () => {                   
        await(await HomePage.tempmedicalScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-medical-09', { });
    }); 
    it('should compare temp-medical page section 9  screenshots', async () => {                
        await(await HomePage.tempmedicalScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-medical-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 10 ================================================
    it('should save  temp-medical page section 10 screenshots', async () => {
        await(await HomePage.tempmedicalScroll10).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-medical-10', { });
    }); 
    it('should compare temp-medical page section 10  screenshots', async () => {              
        await(await HomePage.tempmedicalScroll10).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('prod-temp-medical-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-medical page section 11 ================================================
    it('should save  temp-medical page section 11 screenshots', async () => {                
        await(await HomePage.tempmedicalScroll11).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-medical-11', { });
    }); 
    it('should compare temp-medical page section 11  screenshots', async () => {              
        await(await HomePage.tempmedicalScroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-medical-11', { /* some options */ })).toEqual(0);
    });













   


});