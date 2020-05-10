import { Router } from 'express';

import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';
import isAuthenticated from '@modules/users/infra/http/middlewares/isAtuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(isAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
