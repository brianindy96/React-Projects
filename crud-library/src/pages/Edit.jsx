import React from 'react'
import { Typography, Paper, Button, CircularProgress, Radio } from '@mui/material';
import FormInput from '../components/FormInput';
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form"
import { FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {
    const methods = useForm();

    const { control } = useFormContext;

    const { handleSubmit } =  methods;

    const navigate = useNavigate();

    const onSubmit = async (data) =>{
        try{
            console.log(data);
            
            navigate("/");
        } catch(err){
            console.log(err.message)
        }
    }




  return (
    <div className='max-w-7xl m-auto h-95' id='main-container'>
        <div className='h-95 flex justify-center items-center' id='wrapper'>
        <Paper sx={{ display: "flex", flexDirection: "column", height: "60vh", padding: "20px", minWidth: "720px", margin: "20px 0px", textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                <FormProvider { ...methods }>
                    <form style={{display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center"}}>
                        <h1 className='text-4xl font-bold mb-5'>Edit book details</h1>
                        <FormInput required name="title" label="Title" type="text" />
                        <FormInput required name="author" label="Author" type="text" />
                        <FormInput required name="pages" label="Pages" type="number" />
                        <div style={{display: "flex", alignItems: "center"}}>
                            <FormLabel className='my-2 mx-2 text-black' id="demo-radio-buttons-group-label">Read</FormLabel>
                            <Controller 
                                control={control}
                                defaultValue={false}
                                name="read"
                                render={({ field }) => (
                                <RadioGroup
                                    aria-label="Read"
                                    {...field}
                                    required
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
                            <button className='bg-blue-500 rounded-lg text-md text-white hover:bg-blue-300 py-2 mt-2 px-28 font-semibold' type="submit">Edit Book</button>
                            <Link to="/">
                                <button className='bg-gray-200 hover:bg-gray-400 rounded-lg text-black py-2 mt-5 px-28 font-semibold' variant="outlined">Cancel</button>
                            </Link>
                        </div>
                    </form>
                </FormProvider>
            </Paper>
        </div>
    </div>
  )
}

export default Edit