const { assert } = require('chai');
const HomePage = require('../pageobjects/home.page');



describe('Mandoe Media US production environment-resources pages', () => {

  beforeEach(async () => {

    await browser.maximizeWindow()
    await browser.setTimeout({ 'pageLoad': 800000 })
    await browser.refresh()
    await browser.pause(1000)
    await browser.refresh()


  });
  afterEach(() => {
    browser.execute('window.localStorage.clear()');
    browser.deleteAllCookies()
    browser.execute('sessionStorage.clear()')



  });


  // ======================Resource- Blog=============================

  it('TCR-001-Resources - Blog start free trial 01 button  link -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollBlogSFT01).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.BlogSFT01).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.BlogSFT01).moveTo()
    await (await HomePage.BlogSFT01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog start free trial 01 button  click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCR-002-Resources - Blog footer Get started free button  link -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollBlogfooterGSFF).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.BlogfooterGSF).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.BlogfooterGSF).moveTo()
    await (await HomePage.BlogfooterGSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog Footer Get started free button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCR-003-Resources - Blog Digital signage Tips Main link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.BlogSFT01).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.DigSigTipLnkTxtMain).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.DigSigTipLnkTxtMain).moveTo()
    await (await HomePage.DigSigTipLnkTxtMain).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog Digital signage Tips main link opens:', title);
    await assert.equal('Digital Signage Tips Archives – Mandoe', title, 'title is not found')
  });

  it('TCR-004-Resources - Blog Digital signage Tips link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.DigSigTipLnkTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.DigSigTipLnkTxt).waitForClickable({ timeout: 20000 })
    await (await HomePage.DigSigTipLnkTxt).moveTo()
    await (await HomePage.DigSigTipLnkTxt).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog Digital signage Tips links opens:', title);
    await assert.equal('Digital Signage Tips Archives – Mandoe', title, 'title is not found')

  });
  it('TCR-005-Resources - Blog Case Studies Main link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.DigSigTipLnkTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.CaseStuLnkTxtMain).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.CaseStuLnkTxtMain).moveTo()
    await (await HomePage.CaseStuLnkTxtMain).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog Digital signage Tips main link opens:', title);
    await assert.equal('Case Studies Archives – Mandoe', title, 'title is not found')
  });
  it('TCR-006-Resources - Blog Case Studies link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.CaseStuLnkTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.CaseStuLnkTxt).waitForClickable({ timeout: 20000 })
    await (await HomePage.CaseStuLnkTxt).moveTo()
    await (await HomePage.CaseStuLnkTxt).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog Digital signage Tips main link opens:', title);
    await assert.equal('Case Studies Archives – Mandoe', title, 'title is not found')

  });
  it('TCR-007-Resources - Blog News updates  Main link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.CaseStuLnkTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.NewsUpLnkTxtMain).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.NewsUpLnkTxtMain).moveTo()
    await (await HomePage.NewsUpLnkTxtMain).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog News and updates main link opens:', title);
    await assert.equal('News & Updates Archives – Mandoe', title, 'title is not found')
  });
  it('TCR-008-Resources - Blog News updates link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.NewsUpLnkTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.NewsUpLnkTxt).waitForClickable({ timeout: 20000 })
    await (await HomePage.NewsUpLnkTxt).moveTo()
    await (await HomePage.NewsUpLnkTxt).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog News and updates link opens:', title);
    await assert.equal('News & Updates Archives – Mandoe', title, 'title is not found')
  });
  //============Design inspiration ====================
  it('TCR-009-Resources - Blog Design inspiration  Main link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.NewsUpLnkTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.DesInspTxtMain).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.DesInspTxtMain).moveTo()
    await (await HomePage.DesInspTxtMain).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog Design inspiration main link opens:', title);
    await assert.equal('Design & Inspiration Archives – Mandoe', title, 'title is not found')
  });
  it('TCR-010-Resources - Blog Design inspiration link  -  https://mandoemedia.com/blog/', async () => {
    await browser.url("/blog/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.DesInspTxtMain).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.DesInspTxt).waitForClickable({ timeout: 20000 })
    await (await HomePage.DesInspTxt).moveTo()
    await (await HomePage.DesInspTxt).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Resources - Blog News and updates link opens:', title);
    await assert.equal('Design & Inspiration Archives – Mandoe', title, 'title is not found')
  });

  //=============Blog news and updates
  it('TCR-011-Resources - Blog food-sustainability make a video its free button  link  -  https://mandoemedia.com/blog/elements-and-templates-food-sustainability/', async () => {
    await browser.url("/elements-and-templates-food-sustainability/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.BlogFoodMVIF).moveTo()
    await (await HomePage.BlogFoodMVIF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' Blog food-sustainability make a video its free button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCR-012-Resources - Blog food-sustainability Get started button  link  -  https://mandoemedia.com/blog/elements-and-templates-food-sustainability/', async () => {
    await browser.url("/elements-and-templates-food-sustainability/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollBlogFoodGS).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.BlogFoodGS).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.BlogFoodGS).moveTo()
    await (await HomePage.BlogFoodGS).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' Blog food-sustainability Get started button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCR-013-Resources - Blog food-sustainability Footer Get started free button  link  -  https://mandoemedia.com/blog/elements-and-templates-food-sustainability/', async () => {
    await browser.url("/elements-and-templates-food-sustainability/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollBlogFoodGSF).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.BlogFoodGSF).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.BlogFoodGSF).moveTo()
    await (await HomePage.BlogFoodGSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' Blog food-sustainability Footer Get started free button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  //===============Case studies
  it('TCR-014-Resources - case-studies Get started button  link  -  https://mandoemedia.com/blog/topic/case-studies/', async () => {
    await browser.url("/blog/topic/case-studies/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.CStudiesGS).moveTo()
    await (await HomePage.CStudiesGS).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' case-studies Get started button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCR-015-Resources - case-studies Get started free button  link  -  https://mandoemedia.com/blog/topic/case-studies/', async () => {
    await browser.url("/blog/topic/case-studies/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollCStudiesGSF).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.CStudiesGSF).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.CStudiesGSF).moveTo()
    await (await HomePage.CStudiesGSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' case-studies Get started free button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  //=================Software-only-pricing

  it('TCR-016-software-only-pricing 14 day free trial left  -  https://mandoemedia.com/pricing/software-only-pricing/', async () => {
    await browser.url("/pricing/software-only-pricing/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollSWOPS14DFT).scrollIntoView()
    await (await HomePage.SWOP14DFTleft).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.SWOP14DFTleft).moveTo()
    await (await HomePage.SWOP14DFTleft).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' software-only-pricing 14day free trial left button  click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCR-017-software-only-pricing 14 day free trial right  -  https://mandoemedia.com/pricing/software-only-pricing/', async () => {
    await browser.url("/pricing/software-only-pricing/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollSWOPS14DFT).scrollIntoView()
    await (await HomePage.SWOP14DFTright).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.SWOP14DFTright).moveTo()
    await (await HomePage.SWOP14DFTright).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' software-only-pricing 14day free trial right button  click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCR-018-software-only-pricing Get started free trial right  -  https://mandoemedia.com/pricing/software-only-pricing/', async () => {
    await browser.url("/pricing/software-only-pricing/")
    await (await HomePage.talktoSales).moveTo()
    await browser.pause(4000)
    await (await HomePage.scrollSWOPfooterGSF).scrollIntoView()
    await (await HomePage.SWOPGSF).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.SWOPGSF).moveTo()
    await (await HomePage.SWOPGSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log(' software-only-pricing Get started free trial right button  click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });



  //=============about===========================================

  it('TCR-019-About start free trial  -  https://mandoemedia.com/about-us/ ', async () => {
    await browser.url("/about-us/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollAboutfooter).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.aboutSFT).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.aboutSFT).moveTo()
    await (await HomePage.aboutSFT).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('About start free trial button  click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCR-020-About Make a video its free https://mandoemedia.com/about-us/ ', async () => {
    await browser.url("/about-us/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollAboutfooter).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.aboutMVIF).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.aboutMVIF).moveTo()
    await (await HomePage.aboutMVIF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('About Make a video its free  button  click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  //==============locations ====================
  it('TCR-021-locations page first location  -  https://mandoemedia.com/locations/', async () => {
    await browser.url("/locations/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.location1).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.location1).moveTo()
    await (await HomePage.location1).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('locations first location:', title);
    await assert.equal('Get Digital Signage in Nizhny Tagil | Mandoe Media', title, 'title is not found')
  });
  it('TCR-022-locations page first location learnmore  -  https://mandoemedia.com/locations/ ', async () => {
    await browser.url("/locations/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.location1).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.learnmore1).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.learnmore1).moveTo()
    await (await HomePage.learnmore1).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('locations first location learnmore:', title);
    await assert.equal('Get Digital Signage in Nizhny Tagil | Mandoe Media', title, 'title is not found')
  });
  it('TCR-023-locations page third location  -  https://mandoemedia.com/locations/', async () => {
    await browser.url("/locations/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.location3).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.location3).moveTo()
    await (await HomePage.location3).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('locations third location:', title);
    await assert.equal('Get Digital Signage in Mount Prospect | Mandoe Media', title, 'title is not found')
  });
  it('TCR-024-locations page Third location learnmore  -  https://mandoemedia.com/locations/', async () => {
    await browser.url("/locations/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.location1).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.learnmore3).waitForDisplayed({ timeout: 6000 })
    await (await HomePage.learnmore3).moveTo()
    await (await HomePage.learnmore3).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('locations third location learnmore:', title);
    await assert.equal('Get Digital Signage in Mount Prospect | Mandoe Media', title, 'title is not found')
  });


});