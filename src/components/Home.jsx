import { AppBar, Button, Toolbar, Typography ,Box} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_entity } from '../Redux/EntityRedux/EntityAction';
import { computeHeadingLevel } from '@testing-library/react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
export default function Home() {
    const dispatch=useDispatch()
    const {data}=useSelector((store)=>store.entity_get)
    const [filter,setFilter]=useState([])
 
    useEffect(()=>{
        dispatch(get_entity())
        setFilter(data)
    },[])
    const getData=()=>{ }
    console.log(filter);
    
  return (
    <>
    <AppBar>
        <Toolbar>
            <Typography>PetBoarding</Typography>
        </Toolbar>
    </AppBar>
    <Box sx={{ margin:"auto",marginTop:"100px",display:"flex", justifyContent:"space-between" , width:"70%"}}>
   <Link to='/listing/create' style={{textDecoration:"none"}}> <Button variant='contained'>Create Entity</Button></Link>
        <Button variant='contained' onClick={()=>{
               let newdata= data.filter((e)=>e.city=="Ghaziabad")
               setFilter(newdata)
        }}>Filter By City Name</Button>
        <Button variant='contained' onClick={()=>{
               let newdata= data.filter((e)=>e.verified=="Yes")
               setFilter(newdata)
        }}> Filter By Varified</Button>
        <Button variant='contained' onClick={()=>{
               let updated=data.sort((a,b)=> {
                     
                    return Number(b.cpd)-Number(a.cpd)
               })
              console.log(updated)
               setFilter(updated)
        }}>Sort By Cost Per Day</Button>
        <Button variant='contained' onClick={()=>{
                  let letest= data.sort((a,b)=> Number(a.rating)-Number(b.rating))
                    setFilter(letest)
        }}>Sort By Cost Rating</Button>
         <Button variant='contained' onClick={()=>{
                 // setFilter(data)
        }}>Show All</Button>
    </Box>
     {/* table box */}
    <Box sx={{margin:"10px"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow  >
            <TableCell >id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Capacity</TableCell>
            <TableCell align="right">Cost per day</TableCell>
            <TableCell align="right">Verified</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filter.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
              <TableCell align="right">{row.cpd}</TableCell>
              <TableCell align="right">{row.verified}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
    </>
  )
}
