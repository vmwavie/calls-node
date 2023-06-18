import {type Request, type Response} from 'express';
import {Twilio} from 'twilio';
import {type CallInterface} from '../interface/call';

class CreateCallController {
	async handle(res: Response, req: Request) {
		const {clientNumber} = req.body as CallInterface;

		const accountSid = process.env.TWILIO_ACCOUNT_SID;
		const authToken = process.env.TWILIO_AUTH_TOKEN;
		const client = new Twilio(accountSid, authToken);

		await client.calls.create({
			url: process.env.MESSAGE_URL!,
			to: clientNumber,
			from: process.env.TWILIO_NUMBER!,
		})
			.then(() => res.status(200).json('call started with successfully'))
			.catch(err => res.status(500).json(err));
	}
}

export {CreateCallController};

