describe('My React app', () => {
  it('should look correct', async () => {
    await browser.url('');
    await browser.execute('/*@visual.init*/', 'My Solution');
    await browser.execute('/*@visual.snapshot*/', 'Home Page');

    const result = await browser.execute('/*@visual.end*/');
    expect(result.message).toBeNull();
  });
});
