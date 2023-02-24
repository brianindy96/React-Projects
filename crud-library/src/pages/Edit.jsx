import React from 'react'
import { Typography, Paper, Button, CircularProgress, Radio } from '@mui/material';
import FormInput from '../components/FormInput';
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form"
import { FormLabel, RadioGroup, FormControlLabel, FormControl } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { updateBooks } from '../services/book.service';

const Edit = ({ bookId }) => {
    const methods = useForm();

    const { control } = useFormContext;

    const { handleSubmit } =  methods;

    const navigate = useNavigate();

    const onSubmit = async (data) =>{
        try{
            // console.log(bookId);
            // console.log(data);
            await updateBooks(bookId, data);
            navigate("/");
        } catch(err){
            console.log(err.message)
        }
    }




  return (
    <div className='max-w-7xl m-auto h-95' id='main-container'>
        <div className='min-h-full flex flex-col justify-center items-center mx-auto ' id='wrapper'>
        <div className='bg-white flex flex-col justify-start items-center px-6 py-5 sm:px-24 sm:py-16 md:px-52 md:py-16 rounded-xl transition-all duration-300 '>
                <FormProvider { ...methods }>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                        <h1 className='text-3xl sm:text-4xl font-bold mb-5 mt-2'>Edit book details</h1>
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
                            <button className='bg-blue-500 font-bold text-white rounded-lg text-md hover:bg-blue-300 px-24 sm:px-28 py-2.5 tracking-wider mb-5 mt-2 ' type="submit">Edit Book</button>
                            <Link to="/">
                                <button className='bg-gray-200 font-bold hover:bg-gray-400 rounded-lg text-black px-28 py-2 tracking-wide' variant="outlined">Cancel</button>
                            </Link>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    </div>
  )
}

export default Edit