describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Clicar no botao entrar', async () => {
    await element(by.id('alert')).tap();
    await element(by.text('OK')).tap();
  });

});
