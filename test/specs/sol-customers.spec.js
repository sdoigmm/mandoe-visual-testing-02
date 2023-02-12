const HomePage = require('../pageobjects/home.page');



describe('Products customers page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/customers/'); 
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



//===================================================customers section 1==============================================================================================================
    it('should save customers  page section 1 screenshots', async () => {  
        await browser.saveScreen('sol-customers-01', { });
    }); 
    it('should compare customers page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('sol-customers-01', { /* some options */ })).toEqual(0);
    });
//===================================================customers page section 2 ================================================
    it('should save  customers page section 2 screenshots', async () => {                        
        await(await HomePage.customersScroll2).scrollIntoView()           
        await browser.saveScreen('sol-customers-02', { });
    }); 
    it('should compare customers page section 2  screenshots', async () => {
        await(await HomePage.customersScroll2).scrollIntoView()
       
        await expect(await browser.checkScreen('sol-customers-02', { /* some options */ })).toEqual(0);
    });
//===================================================customers page section 3 ================================================
    it('should save  customers page section 3 screenshots', async () => {     
        await(await HomePage.customersScroll3).scrollIntoView()
       
        await browser.saveScreen('sol-customers-03', { });
    }); 
    it('should compare customers page section 3  screenshots', async () => {                   
        await(await HomePage.customersScroll3).scrollIntoView()
       
        await expect(await browser.checkScreen('sol-customers-03', { /* some options */ })).toEqual(0);
    });
//===================================================customers page section 4 ================================================
    it('should save  customers page section 4 screenshots', async () => {     
        await(await HomePage.customersScroll4).scrollIntoView()
       
        await browser.saveScreen('sol-customers-04', { });
    }); 
    it('should compare customers page section 4  screenshots', async () => {                   
        await(await HomePage.customersScroll4).scrollIntoView()
       
        await expect(await browser.checkScreen('sol-customers-04', { /* some options */ })).toEqual(0);
    });
 //===================================================customers page section 5 ================================================
 it('should save  customers page section 5 screenshots', async () => {     
    await(await HomePage.customersScroll5).scrollIntoView()
   
    await browser.saveScreen('sol-customers-05', { });
}); 
it('should compare customers page section 5  screenshots', async () => {                   
    await(await HomePage.customersScroll5).scrollIntoView()
   
    await expect(await browser.checkScreen('sol-customers-05', { /* some options */ })).toEqual(0);
});













   


});


