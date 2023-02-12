const { assert } = require('chai');
const HomePage = require('../pageobjects/home.page');



describe('Mandoe Media US production environment-solutions pages', () => {

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


  //======================Solutions- Hospitality=============================

  it('TCS-001-Solutions- Hospitality header Start Free trial button  link  -  https://mandoemedia.com/industries/hospitality/', async () => {
    await browser.url("/industries/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.HospitalitySFTBtn).moveTo()
    await (await HomePage.HospitalitySFTBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Hospitality header Start Free trial button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCS-002-Solutions- Hospitality header Make a digital sign button  link  -  https://mandoemedia.com/industries/hospitality/', async () => {
    await browser.url("/industries/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.HospitalityMakeaDigSign).moveTo()
    await (await HomePage.HospitalityMakeaDigSign).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Hospitality header Make a digital sign button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCS-003-Solutions- Hospitality Start free trial on the middle image bar button link  -  https://mandoemedia.com/industries/hospitality/', async () => {
    await browser.url("/industries/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollHospGSTdiv).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.HospitalitySFTBtn02).moveTo()
    await (await HomePage.HospitalitySFTBtn02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Hospitality Start free trial on the middle image bar button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });


  it('TCS-004-Solutions- Solutions- Hospitality Start free trial button on the footer  -  https://mandoemedia.com/industries/hospitality/', async () => {
    await browser.url("/industries/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollHospFooterGSTtxt).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.HospitalitySFTBtn03).moveTo()
    await (await HomePage.HospitalitySFTBtn03).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Hospitality Start free trial button on the footer click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCS-005-Solutions- Solutions- Hospitality make a video its free button on the footer  -  https://mandoemedia.com/industries/hospitality/', async () => {
    await browser.url("/industries/hospitality/")
    await browser.url("en-au/industries/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollHospFooterGSTtxt).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.HospitalityfooterMVIF).moveTo()
    await (await HomePage.HospitalityfooterMVIF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Hospitality make a video its free button on the footer click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });


  //================================== Use cases - Digital menuboard

  it('TCS-006-Solutions- Usecases Digital menuboard Start Free trial-01 button  -  https://mandoemedia.com/usecase/digital-menuboards/', async () => {
    await browser.url("/usecase/digital-menuboards/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.DigMBSFTBtn01).moveTo()
    await (await HomePage.DigMBSFTBtn01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Usecases Digital menuboard Start Free trial-01 button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });
  it('TCS-007-Solutions- Usecases Digital menuboard Make a Digital menu/Window signange/In-store signange/videowall button  -  https://mandoemedia.com/usecase/digital-menuboards/', async () => {
    await browser.url("/usecase/digital-menuboards/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.DigMBmakeaDM).moveTo()
    await (await HomePage.DigMBmakeaDM).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Usecases Digital menuboard Make a Digital menu/Window signange/In-store signange/videowall button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });


  it('TCS-008-Solutions- Usecases Digital menuboard Start Free trial-02 button  -  https://mandoemedia.com/usecase/digital-menuboards/', async () => {
    await browser.url("/usecase/digital-menuboards/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollDigMBimg).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.DigMBSFTBtn02).moveTo()
    await (await HomePage.DigMBSFTBtn02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Usecases Digital menuboard Start Free trial-02 button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });
  it('TCS-009-Solutions- Usecases Digital menuboard footer Start Free trial-03 button  -  https://mandoemedia.com/usecase/digital-menuboards/', async () => {
    await browser.url("/usecase/digital-menuboards/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollDigMBFooterGSTtxt).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.DigMBSFTBtn03).moveTo()
    await (await HomePage.DigMBSFTBtn03).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Usecases Digital menuboard footer Start Free trial-03 button click opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });
  it('TCS-010-Solutions- Usecases Digital menuboard footer Make a video its free button  -  https://mandoemedia.com/usecase/digital-menuboards/', async () => {
    await browser.url("/usecase/digital-menuboards/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollDigMBFooterGSTtxt).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.DigMBfooterMVIF).moveTo()
    await (await HomePage.DigMBfooterMVIF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Usecases Digital menuboard footer Make a video its free buttonclick opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });

  //======================Solutions- Enterprise

  it('TCS-011-Solutions- Enterprise Contact our team button  -  https://mandoemedia.com/enterprise/', async () => {
    await browser.url("/enterprise/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.EntConOurTeam).moveTo()
    await (await HomePage.EntConOurTeam).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Enterprise Contact our team buttonclick opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')

  });
  it('TCS-012-Solutions- Enterprise Contact us button  -  https://mandoemedia.com/enterprise/', async () => {
    await browser.url("/enterprise/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollEntFooterSTOT).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.EntConUs).moveTo()
    await (await HomePage.EntConUs).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Enterprise Contact us buttonclick opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')

  });

  //======================Solutions- Customers
  it('TCS-013-Solutions- Customer start free trial -01 header button  -  https://mandoemedia.com/customers/', async () => {
    await browser.url("/customers/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.CustomerSFT01).moveTo()
    await (await HomePage.CustomerSFT01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Customer start free trial-01 header buttonclick opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });
  it('TCS-014-Solutions- Customer make a video its free-01 header button  -  https://mandoemedia.com/customers/', async () => {
    await browser.url("/customers/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.CustomerMVIF01).moveTo()
    await (await HomePage.CustomerMVIF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Customer make a video its free-01 header buttonclick opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });

  it('TCS-015-Solutions- Customer start free trial-02 footer button  -  https://mandoemedia.com/customers/', async () => {
    await browser.url("/customers/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollCusFooterGST).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.CustomerSFT02).moveTo()
    await (await HomePage.CustomerSFT02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Customer start free trial-02 footer buttonclick opens:', title);
    await assert.equal('Create an account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });
  it('TCS-016-Solutions- Customer make a video its free-02 Footer button  -  https://mandoemedia.com/customers/', async () => {
    await browser.url("/customers/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(20000)
    await (await HomePage.scrollCusFooterGST).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.CustomerMVIF02).moveTo()
    await (await HomePage.CustomerMVIF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Solutions- Customer make a video its free-02 footer buttonclick opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')

  });
  it('TCS-017- Home page header resellerProgram button  -  https://mandoemedia.com/', async () => {
    await browser.url("/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.resellerProgram).moveTo()
    await (await HomePage.resellerProgram).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page header resellerProgram button', title);
    await assert.equal('Reseller Program – Mandoe', title, 'title is not found')

  });

  it('TCS-018- Home page header resellerProgram button on en-au -  https://mandoemedia.com/en-au/', async () => {
    await browser.url("/en-au/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.resellerProgram).moveTo()
    await (await HomePage.resellerProgram).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page header resellerProgram button on en-au', title);
    await assert.equal('Reseller Program - Mandoe Australia', title, 'title is not found')

  });
  it('TCS-019- Home page header resellerProgram button on en-gb -  https://mandoemedia.com/en-gb/', async () => {
    await browser.url("/en-gb/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.resellerProgram).moveTo()
    await (await HomePage.resellerProgram).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page header resellerProgram button on en-gb', title);
    await assert.equal('Reseller Program - Mandoe United Kingdom', title, 'title is not found')

  });

});