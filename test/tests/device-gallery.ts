
jest.setTimeout(10000);

describe('Google', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:4000');
	});

	it('Should display "Device Gallery" header', async () => {
		await page.waitForSelector('h1[id="page-header"]');
		const textContent = await page.evaluate(() => {
			const selector = document.querySelector('h1[id="page-header"]');
			if (selector) {
				return selector.textContent;
			}
			return '';
		});
		expect(textContent).toEqual('Device Gallery');
	});

	it('Should filter input be accessible', async () => {
		await expect(page).toFill('input[automation-id="filter-input"]', 'A70s');
	});

	it('Should display "Samsung Galaxy A70s" card', async () => {
		await page.waitForSelector('div[automation-id="card-title"]');
		const textContent = await page.evaluate(() => {
			const selector = document.querySelector('div[automation-id="card-title"]');
			if (selector) {
				return selector.textContent;
			}
			return '';
		});
		await expect(textContent).toEqual('Samsung Galaxy A70s');
		await new Promise((resolve) => setTimeout(resolve, 5000));
	});
});
