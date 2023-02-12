const HomePage = require('../pageobjects/home.page');



describe('Products template', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/templates/'); 
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



//===================================================template page secton 1==============================================================================================================
    it('should save template  page section 1 screenshots', async () => {  
        await browser.saveScreen('Prod-template-01', { });
    }); 
    it('should compare template page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Prod-template-01', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 2 ================================================
    it('should save  template page section 2 screenshots', async () => {                        
        await(await HomePage.tempScroll2).scrollIntoView()
        await browser.saveScreen('Prod-template-02', { });
    }); 
    it('should compare template page section 2  screenshots', async () => {
        await(await HomePage.tempScroll2).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-02', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 3 ================================================
    it('should save  template page section 3 screenshots', async () => {
        await(await HomePage.tempScroll3).scrollIntoView()       
        await browser.saveScreen('Prod-template-03', { });
    }); 
    it('should compare template page section 3  screenshots', async () => {                
        await(await HomePage.tempScroll3).scrollIntoView()        
        await expect(await browser.checkScreen('Prod-template-03', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 4 ================================================
    it('should save  template page section 4 screenshots', async () => {                 
        await(await HomePage.tempScroll4).scrollIntoView()     
        await browser.saveScreen('Prod-template-04', { });
    }); 
    it('should compare template page section 4  screenshots', async () => {
        await(await HomePage.tempScroll4).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-04', { /* some options */ })).toEqual(0);
    });
    //===================================================template page section 5 ================================================
    it('should save  template page section 5 screenshots', async () => {                 
        await(await HomePage.tempScroll5).scrollIntoView()     
        await browser.saveScreen('Prod-template-05', { });
    }); 
    it('should compare template page section 5  screenshots', async () => {
        await(await HomePage.tempScroll5).scrollIntoView()        
        await expect(await browser.checkScreen('Prod-template-05', { /* some options */ })).toEqual(0);
    });
    //===================================================template page section 6 ================================================
    it('should save  template page section 6 screenshots', async () => {
        await(await HomePage.tempScroll6).scrollIntoView()        
        await browser.saveScreen('Prod-template-06', { });
    }); 
    it('should compare template page section 6  screenshots', async () => {                
        await(await HomePage.tempScroll6).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-06', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 7 ================================================
    it('should save  template page section 7 screenshots', async () => {               
        await(await HomePage.tempScroll7).scrollIntoView()       
        await browser.saveScreen('Prod-template-07', { });
    }); 
    it('should compare template page section 7  screenshots', async () => {                
        await(await HomePage.tempScroll7).scrollIntoView() 
        await expect(await browser.checkScreen('Prod-template-07', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 8 ================================================
    it('should save  template page section 8 screenshots', async () => {                
        await(await HomePage.tempScroll8).scrollIntoView()        
        await browser.saveScreen('Prod-template-08', { });
    }); 
    it('should compare template page section 8  screenshots', async () => {
        await(await HomePage.tempScroll8).scrollIntoView()      
        await expect(await browser.checkScreen('Prod-template-08', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 9 ================================================
    it('should save  template page section 9 screenshots', async () => {                   
        await(await HomePage.tempScroll9).scrollIntoView()        
        await browser.saveScreen('Prod-template-09', { });
    }); 
    it('should compare template page section 9  screenshots', async () => {                
        await(await HomePage.tempScroll9).scrollIntoView()        
        await expect(await browser.checkScreen('Prod-template-09', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 10 ================================================
    it('should save  template page section 10 screenshots', async () => {
        await(await HomePage.tempScroll10).scrollIntoView()       
        await browser.saveScreen('Prod-template-10', { });
    }); 
    it('should compare template page section 10  screenshots', async () => {              
        await(await HomePage.tempScroll10).scrollIntoView()      
        await expect(await browser.checkScreen('Prod-template-10', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 11 ================================================
    it('should save  template page section 11 screenshots', async () => {                
        await(await HomePage.tempScroll11).scrollIntoView()        
        await browser.saveScreen('Prod-template-11', { });
    }); 
    it('should compare template page section 11  screenshots', async () => {              
        await(await HomePage.tempScroll11).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-11', { /* some options */ })).toEqual(0);
    });

//===================================================template page section 12 ================================================
    it('should save  template page section 12 screenshots', async () => {               
        await(await HomePage.tempScroll12).scrollIntoView()       
        await browser.saveScreen('Prod-template-12', { });
    }); 
    it('should compare template page section 12  screenshots', async () => {             
        await(await HomePage.tempScroll12).scrollIntoView()     
        await expect(await browser.checkScreen('Prod-template-12', { /* some options */ })).toEqual(0);
    });
    //===================================================template page section 13 ================================================
    it('should save  template page section 13 screenshots', async () => {                
        await(await HomePage.tempScroll13).scrollIntoView()        
        await browser.saveScreen('Prod-template-13', { });
    }); 
    it('should compare template page section 13  screenshots', async () => {              
        await(await HomePage.tempScroll13).scrollIntoView()      
        await expect(await browser.checkScreen('Prod-template-13', { /* some options */ })).toEqual(0);
    });
    //===================================================template page section 14 ================================================
    it('should save  template page section 14 screenshots', async () => {                
        await(await HomePage.tempScroll14).scrollIntoView()        
        await browser.saveScreen('Prod-template-14', { });
    }); 
    it('should compare template page section 14  screenshots', async () => {
        await(await HomePage.tempScroll14).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-14', { /* some options */ })).toEqual(0);
    });
    //===================================================template page section 15 ================================================
    it('should save  template page section 15 screenshots', async () => {                
        await(await HomePage.tempScroll15).scrollIntoView()     
        await browser.saveScreen('Prod-template-15', { });
    }); 
    it('should compare template page section 15  screenshots', async () => { 
        await(await HomePage.tempScroll15).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-15', { /* some options */ })).toEqual(0);
    });
//===================================================template page section 16 ================================================
    it('should save  template page section 16 screenshots', async () => {                
        await(await HomePage.tempScroll16).scrollIntoView()       
        await browser.saveScreen('Prod-template-16', { });
    }); 
    it('should compare template page section 16  screenshots', async () => {
        await(await HomePage.tempScroll16).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-16', { /* some options */ })).toEqual(0);
    });
    //===================================================template page section 17 ================================================
    it('should save  template page section 17 screenshots', async () => {              
        await(await HomePage.tempScroll17).scrollIntoView()      
        await browser.saveScreen('Prod-template-17', { });
    }); 
    it('should compare template page section 17  screenshots', async () => {
        await(await HomePage.tempScroll17).scrollIntoView()       
        await expect(await browser.checkScreen('Prod-template-17', { /* some options */ })).toEqual(0);
    });
     //===================================================template page section 18 ================================================
     it('should save  template page section 18 screenshots', async () => {              
        await(await HomePage.tempScroll18).scrollIntoView()      
        await browser.saveScreen('Prod-template-18', { });
    }); 
    it('should compare template page section 18  screenshots', async () => {
        await(await HomePage.tempScroll18).scrollIntoView()    
        await expect(await browser.checkScreen('Prod-template-18', { /* some options */ })).toEqual(0);
    });












   


});