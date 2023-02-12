const HomePage = require('../pageobjects/home.page');



describe('contactSales Us page snapshots', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/contact/sales/'); 
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












//===================================================contactSales page==============================================================================================================
    it('should save contactSales  page section 1 screenshots', async () => {  
        await browser.saveScreen('res-contactSales-01', { });
    }); 
    it('should compare contactSales page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('res-contactSales-01', { /* some options */ })).toEqual(0);
    });
//===================================================contactSales page section 2 ================================================
    it('should save  contactSales page section 2 screenshots', async () => {                        
        await(await HomePage.contactSalesScroll2).scrollIntoView()
        await browser.saveScreen('res-contactSales-02', { });
    }); 
    it('should compare contactSales page section 2  screenshots', async () => {
        await(await HomePage.contactSalesScroll2).scrollIntoView()
        await expect(await browser.checkScreen('res-contactSales-02', { /* some options */ })).toEqual(0);
    });
//===================================================contactSales page section 3 ================================================
    it('should save  contactSales page section 3 screenshots', async () => {
        await(await HomePage.contactSalesScroll3).scrollIntoView()
        await browser.saveScreen('res-contactSales-03', { });
    }); 
    it('should compare contactSales page section 3  screenshots', async () => {                  
        await(await HomePage.contactSalesScroll3).scrollIntoView()
        await expect(await browser.checkScreen('res-contactSales-03', { /* some options */ })).toEqual(0);
    });
//===================================================contactSales page section 4 ================================================
    it('should save  contactSales page section 4 screenshots', async () => {                                 
        await(await HomePage.contactSalesScroll4).scrollIntoView()
        await browser.saveScreen('res-contactSales-04', { });
    }); 
    it('should compare contactSales page section 4  screenshots', async () => {      
        await(await HomePage.contactSalesScroll4).scrollIntoView()
        await expect(await browser.checkScreen('res-contactSales-04', { /* some options */ })).toEqual(0);
    });
    












   


});


