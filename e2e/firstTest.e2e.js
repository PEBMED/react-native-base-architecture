describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Fluxo sem preencher os campos', async () => {
    await element(by.id('button')).tap();
    await expect(element(by.text('{"email":"","password":""}'))).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('Fluxo preenchendo os campos', async () => {
    await element(by.id('email')).typeText('caioaugustov@gmail.com');
    await element(by.id('password')).typeText('123456');
    await element(by.id('button')).tap();
    await expect(element(by.text('{"email":"caioaugustov@gmail.com","password":"123456"}'))).toBeVisible();
    await element(by.text('OK')).tap();
  });

});
