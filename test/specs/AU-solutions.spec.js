const HomePage = require('../pageobjects/home.page');



describe('Solutions page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 1000000 }) 
        await browser.refresh()
        
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')       
           
    });

//  //===================================================Solutions- hospitality page secton 11 pages==============================================================================================================
   it('should save Solutions-hospitality page screenshotsscreenshots', async () => { 
      await browser.url('en-au/industries/hospitality/');
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)    
      // await(await HomePage.intercomBtn).moveTo() 
      // await browser.pause(1000) 
      await browser.saveFullPageScreen('AU-sol-hospitalityPage', { });
   }); 
  it('should compare Solutions-hospitality page screenshots', async () => {  
      await browser.url('en-au/industries/hospitality/');
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)    
      // await(await HomePage.intercomBtn).moveTo() 
      // await browser.pause(1000) 
                  
      await expect(await browser.checkFullPageScreen('AU-sol-hospitalityPage', { /* some options */ })).toEqual(0);
  });
    //  //===================================================Solutions- retail page secton 1==============================================================================================================
    it('should save Solutions-retail page screenshotsscreenshots', async () => { 
        await browser.url('en-au/gift-store/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('AU-sol-retailPage', { });
    }); 
    it('should compare Solutions-retail page screenshots', async () => {  
        await browser.url('en-au/gift-store/');
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('AU-sol-retailPage', { /* some options */ })).toEqual(0);
    });
    //  //===================================================Solutions- hair&beauty page secton 1==============================================================================================================
    it('should save Solutions-hair&beauty page screenshotsscreenshots', async () => { 
        await browser.url('en-au/hair-salon/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
                    
        await browser.saveFullPageScreen('AU-sol-hair&beautyPage', { });
    }); 
    it('should compare Solutions-hair&beauty page screenshots', async () => {  
        await browser.url('en-au/hair-salon/');  
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
                  
        await expect(await browser.checkFullPageScreen('AU-sol-hair&beautyPage', { /* some options */ })).toEqual(0);
    });
        //  //===================================================Solutions- medical page secton 1==============================================================================================================
    it('should save Solutions-medical page screenshotsscreenshots', async () => { 
        await browser.url('en-au/pharmacy/');   
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
                   
        await browser.saveFullPageScreen('AU-sol-medicalPage', { });
    }); 
    it('should compare Solutions-medical page screenshots', async () => {  
        await browser.url('en-au/pharmacy/');
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
              
        await expect(await browser.checkFullPageScreen('AU-sol-medicalPage', { /* some options */ })).toEqual(0);
    });
        //  //===================================================Solutions- fitness page secton 1==============================================================================================================
    it('should save Solutions-fitness page screenshotsscreenshots', async () => { 
        await browser.url('en-au/industries/gym/');
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        
        await browser.saveFullPageScreen('AU-sol-fitnessPage', { });
    }); 
    it('should compare Solutions-fitness page screenshots', async () => {  
      await browser.url('en-au/industries/gym/');
      await browser.pause(4000) 
      // await(await HomePage.talktoSales).moveTo()  
      // await browser.pause(15000)    
      // await(await HomePage.intercomBtn).moveTo() 
      // await browser.pause(1000) 
            
        await expect(await browser.checkFullPageScreen('AU-sol-fitnessPage', { /* some options */ })).toEqual(0);
    });
  //  //===================================================Solutions- digital-menuboards page secton 1==============================================================================================================
it('should save Solutions-digital-menuboards page screenshotsscreenshots', async () => { 
    await browser.url('en-au/usecase/digital-menuboards/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    
    await browser.saveFullPageScreen('AU-sol-digital-menuboardsPage', { });
  }); 
  it('should compare Solutions-digital-menuboards page screenshots', async () => {  
    await browser.url('en-au/usecase/digital-menuboards/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
              
         
    await expect(await browser.checkFullPageScreen('AU-sol-digital-menuboardsPage', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Solutions- window-signage page secton 1==============================================================================================================
it('should save Solutions-window-signage page screenshotsscreenshots', async () => { 
    await browser.url('en-au/usecase/window-signage/'); 
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    
    await browser.saveFullPageScreen('AU-sol-window-signagePage', { });
  }); 
  it('should compare Solutions-window-signage page screenshots', async () => {  
    await browser.url('en-au/usecase/window-signage/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)        
    await expect(await browser.checkFullPageScreen('AU-sol-window-signagePage', { /* some options */ })).toEqual(0);
  });
//  //===================================================Solutions- instore-signage page secton 1==============================================================================================================
it('should save Solutions-instore-signage page screenshotsscreenshots', async () => { 
    await browser.url('en-au/usecase/instore-signage/'); 
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)  
    await browser.saveFullPageScreen('AU-sol-instore-signagePage', { });
  }); 
  it('should compare Solutions-instore-signage page screenshots', async () => {  
    await browser.url('en-au/usecase/instore-signage/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-sol-instore-signagePage', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Solutions- enterprise page secton 1==============================================================================================================
it('should save Solutions-enterprise page screenshotsscreenshots', async () => { 
    await browser.url('en-au/enterprise/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('AU-sol-enterprisePage', { });
  }); 
  it('should compare Solutions-enterprise page screenshots', async () => {  
    await browser.url('en-au/enterprise/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-sol-enterprisePage', { /* some options */ })).toEqual(0);
  });
//  //===================================================Solutions- customers page secton 1==============================================================================================================
it('should save Solutions-customers page screenshotsscreenshots', async () => { 
    await browser.url('en-au/customers/'); 
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('AU-sol-customersPage', { });
  }); 
  it('should compare Solutions-customers page screenshots', async () => {  
    await browser.url('en-au/customers/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-sol-customersPage', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Solutions- partner-program page ==============================================================================================================
  it('should save Solutions-reseller-program page screenshotsscreenshots', async () => { 
    await browser.url('/en-au/partner-program/'); 
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('AU-sol-partner-programPage', { });
  }); 
  it('should compare Solutions-reseller-program page screenshots', async () => {  
    await browser.url('/en-au/partner-program/');
    await browser.pause(4000) 
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)    
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-sol-partner-programPage', { /* some options */ })).toEqual(0);
  });
});