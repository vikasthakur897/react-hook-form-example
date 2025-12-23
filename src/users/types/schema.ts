import { z } from "zod";
import { partterns } from "../../constants/partterns";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, {message: 'Required'}).max(100),
  email: z.string().min(1, {message: 'Email is required'}).refine((val) => partterns.email.test(val), {message: 'Invalid email address'}),
  states: z.array(z.string()).min(0).max(2),
  languagesSpoken: z.array(z.string()),
  gender: z.string().min(1),
  skills: z.array(z.string()).max(2),
  registrationDateAndTime: z.date(),
  formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
  salaryRange: z.array(z.number()).max(2),
  

});
