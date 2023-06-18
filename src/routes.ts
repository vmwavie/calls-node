import {Router} from 'express';
import {CreateCallController} from './controllers/create-call';
import {SendSmsController} from './controllers/send-sms';

const router = Router();

router.post('/call', new CreateCallController().handle);
router.post('/sms', new SendSmsController().handle);

export default router;
