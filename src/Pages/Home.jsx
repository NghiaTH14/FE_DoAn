import React from 'react'
import '../CSS/Home.css'
import NavBar from './Navbar'

import {Grid, Paper, Container, TextField, Button} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  return (
    <>
       <Paper>
        <Grid>
          <Grid>
            <NavBar/>
          </Grid>
            
            <Container maxWidth="xl" >
                <Grid className='header'>
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        // navigation
                        autoplay={{delay: 3000}}
                        pagination={{ clickable: true }}
                        >
                            <SwiperSlide><img style={{width:'100%', height:'400px',objectFit:'cover'}} src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/12/hinh-nen-blackpink-75-696x1116.jpg?fit=700%2C20000&quality=95&ssl=1" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{width:'100%', height:'400px',objectFit:'cover'}} src="https://bangxephang.com/wp-content/uploads/2022/08/hinh-nen-blackpink-cho-dien-thoai.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img style={{width:'100%', height:'400px',objectFit:'cover'}} src="https://maytinhvui.com/hinh-nen-blackpink/anh-nen-blackpink-5/" alt="" /></SwiperSlide>
                    </Swiper>   
                </Grid>
                <Grid className='searchBar'>
                    <Grid className='childSearchBar'>
                        <Grid className='inputSearch'>
                            <Grid className='searchLocation'>
                                <Grid className='searchTitle'>
                                    <AddLocationAltIcon
                                        style={{fontSize:'xx-large', color:'#F5BD19'}}
                                    />
                                    <p>Where do you want to go ?</p>
                                </Grid>
                                
                                <TextField
                                    placeholder='Location'
                                    type='text'
                                    fullWidth
                                />
                            </Grid>
                            <Grid className='searchDate'>

                            <Grid className='searchTitle'>
                                    <AccessTimeIcon
                                        style={{fontSize:'xx-large', color:'#F5BD19'}}
                                    />
                                    <p>Where do you want to go ?</p>
                                </Grid>
                                
                                <TextField
                                    style={{marginTop:'20px'}}
                                    placeholder='Location'
                                    type='date'
                                    variant="standard"
                                    defaultChecked
                                />
                                &ensp;&ensp;
                                <TextField
                                    style={{marginTop:'20px'}}
                                    placeholder='Location'
                                    type='date'
                                    variant="standard"
                                />
                            </Grid> 
                        </Grid>
                        <Grid className='btnLoginGG'>
                            <Button style={{padding:'10px', color:'black',backgroundColor:'primary' }} type='submit' > Search</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    </Paper> 

    </>
  )
}

export default Home