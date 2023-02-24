import React from 'react'
import { Typography, Paper, Button, CircularProgress, Radio } from '@mui/material';
import FormInput from '../components/FormInput';
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form"
import { FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { addBooks } from '../services/book.service';

const Add = () => {
    const methods = useForm();

    const { handleSubmit } =  methods;
    
    const navigate = useNavigate();

    const onSubmit = async (data) =>{
        try{
            console.log(data);
            addBooks(data);
            navigate("/");
        } catch(err){
            console.log(err.message)
        }
    }

    const { control } = useFormContext;

  return (
    <div className='max-w-7xl m-auto h-95' id='main-container'>
        <div className='min-h-full flex flex-col justify-center items-center mx-auto '>
        <Paper className="flex flex-col justify-start items-center px-6 py-6 sm:px-24 sm:py-16 md:px-52 md:py-16 rounded-xl ">
                <FormProvider { ...methods }>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                        <h1 className='text-4xl font-bold mb-5 mt-2'>Add a book</h1>
                        <FormInput required name="title" label="Title" type="text" />
                        <FormInput required name="author" label="Author" type="text" />
                        <FormInput required name="pages" label="Pages" type="number" />
                        <div className="flex items-center">
                            <FormLabel className='my-2 mx-2 text-black' id="demo-radio-buttons-group-label">Read</FormLabel>
                            <Controller
                                control={control}
                                name="read"
                                defaultValue={false}
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
                        <div className='flex flex-col mt-2 mb-5 place-items-center ml-2'>
                            <button className='bg-blue-400 rounded-lg text-md hover:bg-blue-300 ' type="submit">Add Book</button>
                            <Link to="/">
                                <button className='bg-gray-200 hover:bg-gray-400 rounded-lg text-black' variant="outlined">Cancel</button>
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