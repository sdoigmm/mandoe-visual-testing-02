const HomePage = require('../pageobjects/home.page');



describe('Solutions digitalMenuBoards', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
              
      
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
       browser.refresh()
       
           
    });

//===================================================cocktail bar template en-au page==============================================================================================================
    it('should save start with this template en-au sandbox-url', async () => {  
        await browser.url('/en-au/templates/hospitality/cafe/cocktail-bar-special-template/');                       
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo()        
        await browser.pause(2000)
        await(await HomePage.sanboxUrlBtn).moveTo() 
        await(await HomePage.sanboxUrlBtn).click()
        await browser.pause(4000)
        await browser.saveScreen('sandbox-en-au-01', { });
    }); 
    it('should compare start with this template en-au sandbox-url', async () => {  
        await browser.url('/en-au/templates/hospitality/cafe/cocktail-bar-special-template/');                       
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo()           
        await browser.pause(2000)
        await(await HomePage.sanboxUrlBtn).moveTo() 
        await(await HomePage.sanboxUrlBtn).click()
        await browser.pause(4000)
        await expect(await browser.checkScreen('sandbox-en-au-01', { /* some options */ })).toEqual(0);
    });
    //===================================================cocktail bar template en-gb page============================================================

    it('should save start with this template en-gb sandbox-url', async () => {  
        await browser.url('/en-gb/templates/hospitality/cafe/cocktail-bar-special-template/');                       
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo()        
        await browser.pause(2000)
        await(await HomePage.sanboxUrlBtn).moveTo() 
        await(await HomePage.sanboxUrlBtn).click()
        await browser.pause(4000)
        await browser.saveScreen('sandbox-en-gb-01', { });
    }); 
    it('should compare start with this template en-gb sandbox-url', async () => {  
        await browser.url('/en-gb/templates/hospitality/cafe/cocktail-bar-special-template/');                       
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo()           
        await browser.pause(2000)
        await(await HomePage.sanboxUrlBtn).moveTo() 
        await(await HomePage.sanboxUrlBtn).click()
        await browser.pause(4000)
        await expect(await browser.checkScreen('sandbox-en-gb-01', { /* some options */ })).toEqual(0);
    });
//===================================================cocktail bar template  page============================================================

    it('should save start with this template sandbox-url', async () => {  
        await browser.url('/templates/hospitality/cafe/cocktail-bar-special-template/');                       
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo()        
        await browser.pause(2000)
        await(await HomePage.sanboxUrlBtn).moveTo() 
        await(await HomePage.sanboxUrlBtn).click()
        await browser.pause(4000)
        await browser.saveScreen('sandbox-01', { });
    }); 
    it('should compare start with this template sandbox-url', async () => {  
        await browser.url('/templates/hospitality/cafe/cocktail-bar-special-template/');                       
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo()           
        await browser.pause(2000)
        await(await HomePage.sanboxUrlBtn).moveTo() 
        await(await HomePage.sanboxUrlBtn).click()
        await browser.pause(4000)
        await expect(await browser.checkScreen('sandbox-01', { /* some options */ })).toEqual(0);
    });













   


});


