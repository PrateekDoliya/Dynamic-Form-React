import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Input from './Input';
import { MdAddCircleOutline } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const Hero = () => {

    const [type, setType] = useState("");
    const [que, setQue] = useState("")
    const [ans, setAns] = useState([])

    const getValue = (e) => {
        setType(e.target.value)
        setAns([{answer:""}])
    }

    const getQuestion = (e) => {
        setQue(e.target.value)
    }

    const handleAddFields = () => {
        setAns([...ans, {answer:""}])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted Successfully")
        setQue("")
        setType("")
        setAns([])
        console.log({
            question: que,
            answer: ans
        })
    }

  return (
    <>
        <div className="container py-5">
        <span className="fonts"> <FaArrowLeft /> Add Question</span>

        <form onSubmit={ handleSubmit }>
            <div className="form-group mt-4 ">
                <TextField  
                    className='form-control'
                    label='Question Title'
                    value={que}
                    variant="filled"
                    name="question"
                    onChange={ getQuestion }
                />
            </div>

            <div className="form-group mt-4">
                <FormControl variant="filled" sx={{minWidth: '100%' }}>
                    <InputLabel id="demo-simple-select-filled-label">Answer Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={ getValue }
                        value={type}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="number">Number</MenuItem>
                        <MenuItem value="select">Select</MenuItem>
                        <MenuItem value="textarea">TextArea</MenuItem>
                        <MenuItem value="radio">Radio</MenuItem>
                        <MenuItem value="checkbox">Checkbox</MenuItem>
                        <MenuItem value="range">Slider</MenuItem>
                    </Select>
                </FormControl>
            </div>
            
            <div>
                {
                    ans.map( (Elem , Indx) => {
                        return(<>
                            {
                                type ?
                                <Input 
                                    key={Indx} 
                                    type={type} 
                                    option={Indx} 
                                    state={ans} 
                                    updatedFunction={setAns}
                                />
                                :  null
                            }
                            
                        </>)
                    })
                }
                <div className="d-flex justify-content-end">
                    {
                        type ? 
                        <span className="addButton" onClick={handleAddFields}> <MdAddCircleOutline /> </span>
                         : null
                    }
                </div>
            </div>

            <div className="form-group mt-3">
                <button className="btn btn-primary"> SUBMIT </button>
            </div>

        </form>

        </div>

       
    </>
  )
}

export default Hero