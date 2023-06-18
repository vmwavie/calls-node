import {type Request, type Response} from 'express';
import {Twilio} from 'twilio';
import {type SmsInterface} from '../interface/sms';

class SendSmsController {
	async handle(req: Request, res: Response) {
		const {clientNumber, messageText} = req.body as SmsInterface;

		if (!clientNumber || !messageText) {
			return res.status(400).end();
		}

		const accountSid = process.env.TWILIO_ACCOUNT_SID;
		const authToken = process.env.TWILIO_AUTH_TOKEN;
		const client = new Twilio(accountSid, authToken);

		await client.messages.create({
			from: process.env.TWILIO_NUMBER!,
			to: clientNumber,
			body: messageText,
		})
			.then(() => res.status(200).json('sms sent sucefully'))
			.catch(err => res.status(500).json(err));
	}
}

export {SendSmsController};

