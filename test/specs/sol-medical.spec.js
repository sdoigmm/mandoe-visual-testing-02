const HomePage = require('../pageobjects/home.page');



describe('Solutions medical', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/industries/pharmacy/'); 
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












//===================================================medical page==============================================================================================================
    it('should save medical  page section 1 screenshots', async () => {  
        await browser.saveScreen('Sol-medical-01', { });
    }); 
    it('should compare medical page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Sol-medical-01', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 2 ================================================
    it('should save  medical page section 2 screenshots', async () => {                        
        await(await HomePage.Scroll2).scrollIntoView()
        await browser.saveScreen('Sol-medical-02', { });
    }); 
    it('should compare medical page section 2  screenshots', async () => {
        await(await HomePage.Scroll2).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-02', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 3 ================================================
    it('should save  medical page section 3 screenshots', async () => {
        await(await HomePage.Scroll3).scrollIntoView()
        await browser.saveScreen('Sol-medical-03', { });
    }); 
    it('should compare medical page section 3  screenshots', async () => {                  
        await(await HomePage.Scroll3).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-03', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 4 ================================================
    it('should save  medical page section 4 screenshots', async () => {                                 
        await(await HomePage.Scroll4).scrollIntoView()
        await browser.saveScreen('Sol-medical-04', { });
    }); 
    it('should compare medical page section 4  screenshots', async () => {      
        await(await HomePage.Scroll4).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-04', { /* some options */ })).toEqual(0);
    });
    //===================================================medical page section 5 ================================================
    it('should save  medical page section 5 screenshots', async () => {                    
        await(await HomePage.Scroll5).scrollIntoView()
        await browser.saveScreen('Sol-medical-05', { });
    }); 
    it('should compare medical page section 5  screenshots', async () => {  
        await(await HomePage.Scroll5).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-05', { /* some options */ })).toEqual(0);
    });
    //===================================================medical page section 6 ================================================
    it('should save  medical page section 6 screenshots', async () => {
        await(await HomePage.Scroll6).scrollIntoView()
        await browser.saveScreen('Sol-medical-06', { });
    }); 
    it('should compare medical page section 6  screenshots', async () => {               
        await(await HomePage.Scroll6).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-06', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 7 ================================================
    it('should save  medical page section 7 screenshots', async () => {               
        await(await HomePage.Scroll7).scrollIntoView()
        await browser.saveScreen('Sol-medical-07', { });
    }); 
    it('should compare medical page section 7  screenshots', async () => {               
        await(await HomePage.Scroll7).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-07', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 8 ================================================
    it('should save  medical page section 8 screenshots', async () => {                
        await(await HomePage.Scroll8).scrollIntoView()
        await browser.saveScreen('Sol-medical-08', { });
    }); 
    it('should compare medical page section 8  screenshots', async () => {
        await(await HomePage.Scroll8).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-08', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 9 ================================================
    it('should save  medical page section 9 screenshots', async () => {              
        await(await HomePage.Scroll9).scrollIntoView()
        await browser.saveScreen('Sol-medical-09', { });
    }); 
    it('should compare medical page section 9  screenshots', async () => {               
        await(await HomePage.Scroll9).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-09', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 10 ================================================
    it('should save  medical page section 10 screenshots', async () => {
        await(await HomePage.medicalScroll10).scrollIntoView()
        await browser.saveScreen('Sol-medical-10', { });
    }); 
    it('should compare medical page section 10  screenshots', async () => {                 
        await(await HomePage.medicalScroll10).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-10', { /* some options */ })).toEqual(0);
    });
//===================================================medical page section 11 ================================================
    it('should save  medical page section 11 screenshots', async () => {                
        await(await HomePage.medicalScroll11).scrollIntoView()
        await browser.saveScreen('Sol-medical-11', { });
    }); 
    it('should compare  page section 11  screenshots', async () => {               
        await(await HomePage.medicalScroll11).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-11', { /* some options */ })).toEqual(0);
    });

//=================================================== page section 12 ================================================
    it('should save   page section 12 screenshots', async () => {               
        await(await HomePage.Scroll12).scrollIntoView()
        await browser.saveScreen('Sol-medical-12', { });
    }); 
    it('should compare  page section 12  screenshots', async () => {               
        await(await HomePage.Scroll12).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-12', { /* some options */ })).toEqual(0);
    });
    //=================================================== page section 13 ================================================
    it('should save   page section 13 screenshots', async () => {                
        await(await HomePage.medicalScroll13).scrollIntoView()
        await browser.saveScreen('Sol-medical-13', { });
    }); 
    it('should compare  page section 13  screenshots', async () => {               
        await(await HomePage.medicalScroll13).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-13', { /* some options */ })).toEqual(0);
    });
    //=================================================== page section 14 ================================================
    it('should save   page section 14 screenshots', async () => {            
        await(await HomePage.Scroll14).scrollIntoView()
        await browser.saveScreen('Sol-medical-14', { });
    }); 
    it('should compare  page section 14  screenshots', async () => {
        
        await(await HomePage.Scroll14).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-14', { /* some options */ })).toEqual(0);
    });
    //=================================================== page section 15 ================================================
    it('should save   page section 15 screenshots', async () => {                
        await(await HomePage.retailScroll15).scrollIntoView()
        await browser.saveScreen('Sol-medical-15', { });
    }); 
    it('should compare  page section 15  screenshots', async () => {
        await(await HomePage.retailScroll15).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-15', { /* some options */ })).toEqual(0);
    });
      //===================================================medical page section 16 ================================================
    it('should save  medical page section 16 screenshots', async () => {              
        await(await HomePage.medicalScroll16).scrollIntoView()
        await browser.saveScreen('Sol-medical-16', { });
    }); 
    it('should compare medical page section 16  screenshots', async () => {
        await(await HomePage.medicalScroll16).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-16', { /* some options */ })).toEqual(0);
    });
      //===================================================medical page section 17 ================================================
    it('should save  medical page section 17 screenshots', async () => {              
        await(await HomePage.retailScroll17).scrollIntoView()
        await browser.saveScreen('Sol-medical-17', { });
    }); 
    it('should compare medical page section 17  screenshots', async () => {
        await(await HomePage.retailScroll17).scrollIntoView()
        await expect(await browser.checkScreen('Sol-medical-17', { /* some options */ })).toEqual(0);
    });













   


});


