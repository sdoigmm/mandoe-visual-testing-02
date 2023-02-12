const HomePage = require('../pageobjects/home.page');



describe('Products industries2', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000}) 
        await browser.url('/industries2/'); 
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



//===================================================industries2 section 1==============================================================================================================
    it('should save industries2  page section 1 screenshots', async () => {  
        await browser.saveScreen('Prod-industries2-01', { });
    }); 
    it('should compare industries2 page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Prod-industries2-01', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 2 ================================================
    it('should save  industries2 page section 2 screenshots', async () => {                        
        await(await HomePage.industries2Scroll2).scrollIntoView()
        await browser.saveScreen('Prod-industries2-02', { });
    }); 
    it('should compare industries2 page section 2  screenshots', async () => {
        await(await HomePage.industries2Scroll2).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-02', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 3 ================================================
    it('should save  industries2 page section 3 screenshots', async () => {     
        await(await HomePage.industries2Scroll3).scrollIntoView()
        await browser.saveScreen('Prod-industries2-03', { });
    }); 
    it('should compare industries2 page section 3  screenshots', async () => {                   
        await(await HomePage.industries2Scroll3).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-03', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 4 ================================================
    it('should save  industries2 page section 4 screenshots', async () => {                
        await(await HomePage.industries2Scroll4).scrollIntoView()
        await browser.saveScreen('Prod-industries2-04', { });
    }); 
    it('should compare industries2 page section 4  screenshots', async () => {  
        await(await HomePage.industries2Scroll4).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-04', { /* some options */ })).toEqual(0);
    });
    //===================================================industries2 page section 5 ================================================
    it('should save  industries2 page section 5 screenshots', async () => {               
        await(await HomePage.industries2Scroll5).scrollIntoView()
        await browser.saveScreen('Prod-industries2-05', { });
    }); 
    it('should compare industries2 page section 5  screenshots', async () => {
        await(await HomePage.industries2Scroll5).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-05', { /* some options */ })).toEqual(0);
    });
    //===================================================industries2 page section 6 ================================================
    it('should save  industries2 page section 6 screenshots', async () => {
        await(await HomePage.industries2Scroll6).scrollIntoView()
        await browser.saveScreen('Prod-industries2-06', { });
    }); 
    it('should compare industries2 page section 6  screenshots', async () => {               
        await(await HomePage.industries2Scroll6).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-06', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 7 ================================================
    it('should save  industries2 page section 7 screenshots', async () => {                
        await(await HomePage.industries2Scroll7).scrollIntoView()
        await browser.saveScreen('Prod-industries2-07', { });
    }); 
    it('should compare industries2 page section 7  screenshots', async () => {               
        await(await HomePage.industries2Scroll7).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-07', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 8 ================================================
    it('should save  industries2 page section 8 screenshots', async () => {                
        await(await HomePage.industries2Scroll8).scrollIntoView()
        await browser.saveScreen('Prod-industries2-08', { });
    }); 
    it('should compare industries2 page section 8  screenshots', async () => {
        await(await HomePage.industries2Scroll8).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-08', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 9 ================================================
    it('should save  industries2 page section 9 screenshots', async () => {                
        await(await HomePage.industries2Scroll9).scrollIntoView()
        await browser.saveScreen('Prod-industries2-09', { });
    }); 
    it('should compare industries2 page section 9  screenshots', async () => {               
        await(await HomePage.industries2Scroll9).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-09', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 10 ================================================
    it('should save  industries2 page section 10 screenshots', async () => {
        await(await HomePage.industries2Scroll10).scrollIntoView()
        await browser.saveScreen('Prod-industries2-10', { });
    }); 
    it('should compare industries2 page section 10  screenshots', async () => {              
        await(await HomePage.industries2Scroll10).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-10', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 11 ================================================
    it('should save  industries2 page section 11 screenshots', async () => {                
        await(await HomePage.industries2Scroll11).scrollIntoView()
        await browser.saveScreen('Prod-industries2-11', { });
    }); 
    it('should compare industries2 page section 11  screenshots', async () => {               
        await(await HomePage.industries2Scroll11).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-11', { /* some options */ })).toEqual(0);
    });
//===================================================industries2 page section 12 ================================================
    it('should save  industries2 page section 12 screenshots', async () => {                
        await(await HomePage.tempScroll18).scrollIntoView()
        await browser.saveScreen('Prod-industries2-12', { });
    }); 
    it('should compare industries2 page section 12  screenshots', async () => {               
        await(await HomePage.tempScroll18).scrollIntoView()
        await expect(await browser.checkScreen('Prod-industries2-12', { /* some options */ })).toEqual(0);
    });













   


});


