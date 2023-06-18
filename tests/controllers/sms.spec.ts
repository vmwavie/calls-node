import * as dotenv from 'dotenv';
import request from 'supertest';

dotenv.config();

const data = {
	clientNumber: process.env.e2eClientNumber!,
	messageText: 'Hello world',
};

describe('SendSmsController', () => {
	it('should send message to user.', async () => {
		const response = await request(process.env.e2eUrl!)
			.post('/sms')
			.send(data);

		expect(response.status).toBe(200);
	});
});
