describe('My app', () => {
    it('should look correct', async () => {
        await browser.url('');
        const root = await $('#root');
		const isDisplayed = await root.waitForDisplayed();
        expect(isDisplayed).toBeTruthy();
    });
});

