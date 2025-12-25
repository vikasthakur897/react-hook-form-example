import { FormProvider, useForm } from "react-hook-form";
import User from "./user";
import { zodResolver } from "@hookform/resolvers/zod";
import { type UserType, defaultUserValues, UserSchema } from "../types/schema";

export function UserProvider() {

      const methods = useForm<UserType>({mode : 'all' ,
        resolver: zodResolver(UserSchema),
        defaultValues: defaultUserValues
    });

    
    return (
        <FormProvider {...methods}>
            <User />
        </FormProvider>
    )
}