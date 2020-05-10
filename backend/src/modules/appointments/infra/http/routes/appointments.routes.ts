import { Router } from 'express';
// import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import isAuthenticated from '@modules/users/infra/http/middlewares/isAtuthenticated';
// import Appointment from '../../typeorm/entities/Appointment';

const appointmentsRouter = Router();

appointmentsRouter.use(isAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointmentsRepository = new AppointmentsRepository();

//   // const appointmentsRepository = getCustomRepository(Appointment);
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository();

  const { date, provider_id } = request.body;
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );
  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json({ appointment });
});

export default appointmentsRouter;
