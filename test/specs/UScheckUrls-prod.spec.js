
const { assert } = require('chai');
const HomePage = require('../pageobjects/home.page');



describe('Mandoe Media US production environment-products pages', () => {

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
  //=======================Home page ========================================================

  it('TCP-001-Home page Header Nav start free trial link -  https://mandoemedia.com/', async () => {
    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.topNavStartFreeTrialBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page Top nav start free trial opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-002-Home page Header Nav Login  link -  https://mandoemedia.com/', async () => {
    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavLogin).moveTo()
    await browser.pause(20000)
    await (await HomePage.topNavLogin).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page Top Nav Login  link:', title);
    await assert.equal('Welcome | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-003-Home page Start Free trial 02-hero button link -  https://mandoemedia.com/', async () => {
    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.homeSFT02).waitForDisplayed({ timeout: 5000 })
    await (await HomePage.homeSFT02).moveTo()
    await (await HomePage.homeSFT02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  start free trial 02 opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCP-004-Home page Make a video its free 01-hero button link -  https://mandoemedia.com/', async () => {
    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.homeMVF01).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.homeMVF01).moveTo()
    await (await HomePage.homeMVF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  Make a video its free 01 opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-005-Home page footer start free trial link -  https://mandoemedia.com/', async () => {

    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollToSvg).scrollIntoView()
    await (await HomePage.homeSFT03).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.homeSFT03).moveTo()
    await (await HomePage.homeSFT03).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  footer start free trial opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });

  it('TCP-006-Home page footer Make a video its free 02 link -  https://mandoemedia.com/', async () => {
    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await (await HomePage.scrollToSvg).scrollIntoView()
    await (await HomePage.homeMVF02).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.homeMVF02).moveTo()
    await (await HomePage.homeMVF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  Make a video its free 02 opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  // //===============================Features======================================================
  it('TCP-007-Features page Start Free trial 01 link -  https://mandoemedia.com/features/', async () => {
    await browser.url("/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.featuresSFT01).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.featuresSFT01).moveTo()
    await (await HomePage.featuresSFT01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  start free trial 01 opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-008-Features page Make a video its free 01 button link -  https://mandoemedia.com/features/', async () => {
    await browser.url("/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.featuresMVF01).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.featuresMVF01).moveTo()
    await (await HomePage.featuresMVF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  make a video its free on hero image:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-009-Features page footer start free trial  button link -  https://mandoemedia.com/features/', async () => {
    await browser.url("/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollfeaturesfooter).scrollIntoView()
    await (await HomePage.featuresSFT02).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.featuresSFT02).moveTo()
    await (await HomePage.featuresSFT02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  start free trial on footer opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-010-Features page footer Make a video its free 02  button link -  https://mandoemedia.com/features/', async () => {
    await browser.url("/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollfeaturesfooter).scrollIntoView()
    await (await HomePage.featuresMVF02).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.featuresMVF02).moveTo()
    await (await HomePage.featuresMVF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  make a video its free on footer opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  // // //       //================================== How it works ====================================================================





  it('TCP-011-How it works page Get started for free button link -  https://mandoemedia.com/how-it-works/', async () => {
    await browser.url("/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.howItworksGetSFF01).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.howItworksGetSFF01).moveTo()
    await (await HomePage.howItworksGetSFF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page Get started for free button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });


  it('TCP-012-How it works page Sign up for free button 01 link -  https://mandoemedia.com/how-it-works/', async () => {
    await browser.url("/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollsignupandcreate).scrollIntoView()
    await (await HomePage.howItworksSignupFF01).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.howItworksSignupFF01).moveTo()
    await (await HomePage.howItworksSignupFF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page Sign up  for free button 01 click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-013-How it works page Sign up for free button 02 link -  https://mandoemedia.com/how-it-works/', async () => {
    await browser.url("/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollconnectyrdisplay).scrollIntoView()
    await (await HomePage.howItworksSignupFF02).waitForDisplayed({ timeout: 20000 })
    await browser.pause(4000)
    await (await HomePage.howItworksSignupFF02).moveTo()
    await (await HomePage.howItworksSignupFF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page Sign up  for free button 02 click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCP-014-How it workspage Footer Get started free button -  https://mandoemedia.com/how-it-works/', async () => {
    await browser.url("/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollGetSFFtxt).scrollIntoView()
    await (await HomePage.howItworksFooterGetSF).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.howItworksFooterGetSF).moveTo()
    await (await HomePage.howItworksFooterGetSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page footer Get started free buttonclick opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });


  //       // //=============================================Templates =====================================================


  it('TCP-015-Templates page Footer Get started free button -  https://mandoemedia.com/templates/', async () => {
    await browser.url("/templates/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrolltempfooterGetSFFtxt).scrollIntoView()
    await (await HomePage.templatesFooterGetSF).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.templatesFooterGetSF).moveTo()
    await (await HomePage.templatesFooterGetSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Template page footer Get started free button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });


  it('TCP-016-TC Hospitality  page Header Start your 14 day free trial button -  https://mandoemedia.com/templates/hospitality/', async () => {
    await browser.url("/templates/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.hospStartY14DFT).waitForDisplayed({ timeout: 5000 })
    await (await HomePage.hospStartY14DFT).moveTo()
    await (await HomePage.hospStartY14DFT).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('TC Hospitality  page Header Start your 14 day free trial button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });


  //=====================Industries2 =========================================
  it('TCP-017-Industries page footer Get started free -  https://mandoemedia.com/industries2/', async () => {
    await browser.url("/industries2/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollindustriesfooterGetSFFtxt).scrollIntoView()
    await (await HomePage.templatesFooterGetSF).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.templatesFooterGetSF).moveTo()
    await (await HomePage.templatesFooterGetSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Industries page footer Get started free button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  //  //=====================Player Hard ware page / connecting the player=========================================
  it('TCP-018-player hardware Buy media player button link -  https://mandoemedia.com/guides/connecting-the-player/', async () => {
    await browser.url("/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.buyMediaPlayerBtn).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.buyMediaPlayerBtn).moveTo()
    await (await HomePage.buyMediaPlayerBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Buy media player button link click opens:', title);
    await assert.equal('Pricing for Digital Signage Software | Mandoe Media', title, 'title is not found')
  });
  it('TCP-019-player hardware Activate player button link -  https://mandoemedia.com/guides/connecting-the-player/', async () => {
    await browser.url("/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.activatePlayerBtn).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.activatePlayerBtn).moveTo()
    await (await HomePage.activatePlayerBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Activate player button link click opens:', title);
    await assert.equal('Welcome | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCP-020-player hardware Activate mandoemedia text link -  https://mandoemedia.com/guides/connecting-the-player/', async () => {
    await browser.url("/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollactivatetxtlink).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.activatetxtlink).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.activatetxtlink).moveTo()
    await (await HomePage.activatetxtlink).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Activate player button link click opens:', title);
    await assert.equal('Welcome | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCP-021-player hardware Footer Get started Free button link( -  https://mandoemedia.com/guides/connecting-the-player/', async () => {
    await browser.url("/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollpHwfootGetSFFtxt).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.playerHWGSFBtn).waitForClickable({ timeout: 20000 })
    await (await HomePage.playerHWGSFBtn).moveTo()
    await (await HomePage.playerHWGSFBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Footer Get started Free button  click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  //         //======================Player software/download player=============================

  it('TCP-022-player software  Footer Start free trial button link -  https://mandoemedia.com/download-player/', async () => {
    await browser.url("/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollpSwfootGetStodaytxt).scrollIntoView()
    await (await HomePage.PlayerSWStartFTBtn).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.PlayerSWStartFTBtn).moveTo()
    await (await HomePage.PlayerSWStartFTBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player software  Footer Start free trial button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-023-player software  Footer Make a video - its free button  link -  https://mandoemedia.com/download-player/', async () => {
    await browser.url("/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollpSwfootGetStodaytxt).scrollIntoView()
    await (await HomePage.PlayerSWMVFBtn).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.PlayerSWMVFBtn).moveTo()
    await (await HomePage.PlayerSWMVFBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player software  Footer Make a video - its free button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCP-024-Player software download windows link -  https://mandoemedia.com/download-player/', async () => {
    await browser.url("/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollpSwGetDownloadLink).scrollIntoView()
    await (await HomePage.PlayerSWWInDL).waitForDisplayed({ timeout: 20000 })
    await (await HomePage.PlayerSWWInDL).moveTo()
    await browser.pause(4000)
    const attr = await (await HomePage.PlayerSWWInDL).getAttribute('onclick')
    await console.log('Home page Talk to a specialist opens:', attr);
    await assert.equal('downloadAppWindows()', attr, 'Win Download attribute is not found')
  });
  it('TCP-025-Player software download macOS link -  https://mandoemedia.com/download-player/', async () => {
    await browser.url("/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollpSwGetDownloadLink).scrollIntoView()
    await (await HomePage.PlayerSWMacDL).waitForClickable({ timeout: 20000 })
    await (await HomePage.PlayerSWMacDL).moveTo()
    await browser.pause(4000)
    const attr = await (await HomePage.PlayerSWMacDL).getAttribute('onclick')
    await console.log('Home page Talk to a specialist opens:', attr);
    await assert.equal('downloadAppMac()', attr, 'Mac Download attribute is not found')
  });
  it('TCP-026-Player software download linux link -  https://mandoemedia.com/download-player/', async () => {
    await browser.url("/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.PlayerSWWInDL).scrollIntoView()
    await (await HomePage.PlayerSWLinuxDL).moveTo()
    await browser.pause(4000)
    const attr = await (await HomePage.PlayerSWLinuxDL).getAttribute('onclick')
    await console.log('Home page Talk to a specialist opens:', attr);
    await assert.equal('downloadAppLinux()', attr, 'Linux Download attribute is not found')
  });





});
