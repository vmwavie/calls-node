import * as dotenv from 'dotenv';
import request from 'supertest';

dotenv.config();

const data = {
	clientNumber: process.env.e2eClientNumber!,
};

describe('CreateCallController', () => {
	it('should call a user.', async () => {
		const response = await request(process.env.e2eUrl!)
			.post('/call')
			.send(data);

		expect(response.status).toBe(200);
	});
});
