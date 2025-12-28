import { FormProvider, useForm } from "react-hook-form";
import User from "./user";
import { zodResolver } from "@hookform/resolvers/zod";
import { type UserType, defaultUserValues, UserSchema } from "../types/schema";
import { DevTool } from "@hookform/devtools";

export function UserProvider() {

      const methods = useForm<UserType>({mode : 'all' ,
        resolver: zodResolver(UserSchema),
        defaultValues: defaultUserValues
    });

    
    return (
        <FormProvider {...methods}>
            <User />
            <DevTool control={methods.control} />
        </FormProvider>
    )
}