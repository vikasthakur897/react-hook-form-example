import {  useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { type UserType } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import {type  Option } from "../../types/options";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const defaultOptions: Option[] = [
  { id: "1", label: "California" },
  { id: "2", label: "Texas" }
];



const User = () => {

  const { register, formState: { errors }, watch } = useFormContext<UserType>()

  useEffect(() => {
    const sub = watch((value) => {
      console.log("Form Values: ", value);
    });
    return () => sub.unsubscribe();
  },[watch])
  
  return (
   <Stack sx={{ gap: 2 }}>
    <TextField {...register("name")} label="Name" error={!!errors.name} helperText={errors.name?.message} />
    <TextField {...register("email")} label="Email" error={!!errors.email} helperText={errors.email?.message} />


    <RHFAutocomplete<UserType> name="states" label="States" options={defaultOptions} />
    
   </Stack>
  )
}

export default User;
