const HomePage = require('../pageobjects/home.page');

describe('Products page', () => {
    beforeEach(async () => {  
        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad':1000000 })  
        await browser.refresh()
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')        
    });

//  //===================================================Products- Features page secton 6 pages==============================================================================================================
    it('should save Products-Features page screenshots', async () => { 
        await browser.url('en-gb/features/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000)       
        await browser.saveFullPageScreen('UK-prod-featuresPage', { });
    }); 
    it('should compare Products-Features page screenshots', async () => {  
        await browser.url('en-gb/features/');
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('UK-prod-featuresPage', { /* some options */ })).toEqual(0);
    });
        //  //===================================================Products- templates page secton 1==============================================================================================================
    it('should save Products-Templates page screenshots', async () => { 
        await browser.url('en-gb/templates/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('UK-prod-templatesPage', { });
    }); 
    it('should compare Products-Templates page screenshots', async () => {  
        await browser.url('en-gb/templates/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('UK-prod-templatesPage', { /* some options */ })).toEqual(0);
    });
 //===================================================Products- how-it-works page secton 1==============================================================================================================
    it('should save Products-how-it-works page screenshots', async () => { 
        await browser.url('en-gb/how-it-works/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        //   await(await HomePage.intercomBtn).moveTo() 
        //   await browser.pause(1000) 
        await browser.saveFullPageScreen('UK-prod-how-it-worksPage', { });
    }); 
    it('should compare Products-how-it-works page screenshots', async () => {  
        await browser.url('en-gb/how-it-works/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('UK-prod-how-it-worksPage', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- industries2 page secton 1==============================================================================================================
    it('should save Products-industries2 page screenshots', async () => { 
        await browser.url('en-gb/industries2/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('UK-prod-industries2Page', { });
    }); 
    it('should compare Products-industries2 page screenshots', async () => {  
        await browser.url('en-gb/industries2/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('UK-prod-industries2Page', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- ids-getting-started-guide page secton 1==============================================================================================================
    it('should save Products-ids-getting-started-guide page screenshots', async () => { 
        await browser.url('en-gb/guides/getting-started-guide/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('UK-prod-ids-getting-started-guidePage', { });
    }); 
    it('should compare Products-ids-getting-started-guide page screenshots', async () => {  
        await browser.url('en-gb/guides/getting-started-guide/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('UK-prod-ids-getting-started-guidePage', { /* some options */ })).toEqual(0);
    });
    //===================================================Products- Player hardware ==============================================================================================================
    it('should save Products-Player hardware page screenshots', async () => { 
        await browser.url('en-gb/guides/connecting-the-player/'); 
        await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await browser.saveFullPageScreen('UK-prod-player-hardware', { });
    }); 
    it('should compare Products-Player hardware page screenshots', async () => {  
        await browser.url('en-gb/download-player/'); 
         await browser.pause(4000) 
        // await(await HomePage.startFreeTrial).moveTo()  
        // await browser.pause(15000)    
        // await(await HomePage.intercomBtn).moveTo() 
        // await browser.pause(1000) 
        await expect(await browser.checkFullPageScreen('UK-prod-player-hardware', { /* some options */ })).toEqual(0);
    });
});