import { AppBar, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Paper, Rating, Select, TextField, Toolbar, Typography } from '@mui/material'
import { computeHeadingLevel } from '@testing-library/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { post_entity } from '../Redux/EntityRedux/EntityAction';

export default function CreateEntity() {
    const dispatch=useDispatch()
    const [data,setData]=useState({
        name:"",
        city:"",
        address:"",
        capacity:"",
        cpd:"",
        verified:"",
        rating:""
    })
    const [Rating,setRating]=useState(1)
    
    const getDatahandler=(e)=>{
         let {id,value}= e.target;
         setData({...data, [id]:value})
        
        
    }
    const postData=()=>{
          dispatch(post_entity(data))
    }
    console.log(Rating)
    console.log(data)
  return (
    <>
    <AppBar>
        <Toolbar>
        <Typography>Create Entity from here</Typography>
        </Toolbar>
    </AppBar>
   <Box >
      <Paper elevation={5} sx={{width:750 , height:400 ,margin:"auto" , marginTop:"90px" , padding:"40px" }}>
         <Box sx={{display:"flex" ,justifyContent:"space-between" , marginBottom:"20px"}}>
         <TextField type={"text"} id="name" label={"Name"} variant="outlined" onChange={getDatahandler}/> 
        <TextField type={"text"} id="city" label={"City"} onChange={getDatahandler}/>
        <TextField type={"text"} id="address" label={"Address"} onChange={getDatahandler}/>
         </Box>
        
         <Box sx={{display:"flex" ,justifyContent:"space-between"} }>
         <TextField type={"number"} id='capacity' label={"Capacity"} onChange={getDatahandler}variant="outlined"/> 
        <TextField type={"number"}  id="cpd" label={"Cost Per Day"} onChange={getDatahandler}/>
        <FormControl sx={{width:"250px"}}>
         <InputLabel> Verified</InputLabel>
        <Select

          value={data.verified}
          label="Rating"
          onChange={(e)=>{
              setData({...data,verified:e.target.value})
          }}
        >
               <MenuItem value={""}>Choose</MenuItem>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          
        </Select>
      </FormControl>
         </Box>
         <Box sx={{marginTop:"30px" , display:"flex",justifyContent:"space-between" ,width:"350px"}}>
        
         <FormControl sx={{width:"150px"}}>
         <InputLabel>Rating</InputLabel>
        <Select

          value={data.rating}
          label="Rating"
          onChange={(e)=>{
              setData({...data,rating:e.target.value})
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
        
      <Button variant='outlined' onClick={postData}>Save Data</Button>
         </Box>
      </Paper>
     </Box>
    </>
  )
}
