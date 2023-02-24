import React from 'react'
import { Typography, Paper, Button, CircularProgress, Radio } from '@mui/material';
import FormInput from '../components/FormInput';
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form"
import { FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material"
import { Link } from 'react-router-dom';

const Add = () => {
    const methods = useForm();

    const { handleSubmit } =  methods;
    
    const onSubmit = (data) =>{
        console.log(data)
    }

    const { control } = useFormContext;

  return (
    <div className='max-w-7xl m-auto h-95' id='main-container'>
        <div className='h-95 flex justify-center items-center' id='wrapper'>
        <Paper sx={{ display: "flex", flexDirection: "column", height: "60vh", padding: "20px", minWidth: "720px", margin: "20px 0px", textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                <FormProvider { ...methods }>
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center"}}>
                        <h1 className='text-4xl font-bold mb-5'>Add a book</h1>
                        <FormInput required name="title" label="Title" type="text" />
                        <FormInput required name="author" label="Author" type="text" />
                        <FormInput required name="pages" label="Pages" type="number" />
                        <div style={{display: "flex", alignItems: "center"}}>
                        <Controller
                            control={control}
                            name="read"
                            render={({ field }) => (
                            <RadioGroup
                                aria-label="Read"
                                {...field}
                                value={field.value ? "true" : "false"}
                                onChange={(event) => field.onChange(event.target.value === "true")}
                            >
                                <div>
                                <FormControlLabel className='px-6' value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel value="false" control={<Radio />} label="No"  />
                                </div>
                            </RadioGroup>
                            )}
                        />
                        </div>
                        <div className='flex flex-col mt-2 place-items-center ml-2'>
                            <button className='bg-blue-400 rounded-lg text-md hover:bg-blue-300 py-2 mt-2 px-28' type="submit">Add Book</button>
                            <Link to="/">
                                <button className='bg-gray-200 hover:bg-gray-400 rounded-lg text-black py-2 mt-5 px-28' variant="outlined">Cancel</button>
                            </Link>
                        </div>
                    </form>
                </FormProvider>
            </Paper>
        </div>
    </div>
  )
}

export default Add