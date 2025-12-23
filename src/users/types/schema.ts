import { z } from "zod";
import { patterns } from "../../constants/partterns";

export const UserSchema = z.intersection(
  z.object({
    name: z.string().min(2, { message: "Required" }).max(100),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .refine((val) => patterns.email.test(val), {
        message: "Invalid email address",
      }),
    states: z.array(z.string()).min(0).max(2),
    languagesSpoken: z.array(z.string()),
    gender: z.string().min(1),
    skills: z.array(z.string()).max(2),
    registrationDateAndTime: z.date(),
    formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
    salaryRange: z.array(z.number()).max(2),
  }),
  z
    .discriminatedUnion("variant", [
      z.object({ variant: z.literal("create") }),
      z.object({ variant: z.literal("edit"), id: z.string().min(1) }),
    ])
    .and(
      z.union([
        z.object({ isTeacher: z.literal(false) }),
        z.object({
          isTeacher: z.literal(true),

          students: z.array(
            z.object({
              name: z.string().min(4),
            })
          ),
        }),
      ])
    )
);

export type UserType = z.infer<typeof UserSchema>;

export const defaultUserValues: UserType = {
  variant: "create",
  name: "",
  email: "",
  states: [],
  languagesSpoken: [],
  gender: "",
  skills: [],
  registrationDateAndTime: new Date(),
  formerEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 20000],
  isTeacher: false,
};
