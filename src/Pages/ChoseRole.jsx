import React from 'react'
import '../CSS/ChoseRole.css'
import '../CSS/Login.css'
import { Grid ,Paper, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ChoseRole() {
  return (
    <>
        <Grid className='login' >
            <Paper className='loginGrid' style={{boxShadow:"rgb(223 193 34 / 51%) 0px 1px 15px 15px"}}>
                <Paper className='left' fullWidth >
                <Grid className='logoGrid'>
                <Button>
                    <h1 className='logo'>TIKSEAT</h1>
                </Button>
                </Grid>
                <Grid fullWidth>
                    <Button style={{textAlign:'start', display:'flex', color:'black' }}><ArrowBackIcon/> &ensp;Back to login</Button>
                </Grid>
                <Grid>
                    <h2 style={{textAlign:'start', fontFamily: 'Bree Serif'}}>Choose access</h2>
                </Grid>
                <Grid>
                    <p style={{textAlign:'start', color:'#333', fontSize:'18px'}}>To register to access tiksea, you need to select the type of access right</p>
                </Grid>

                <Grid className='SignUpGrid'>
                    <Grid className='btnSignUpUser'>
                    <Button style={{height:'100%', color:'black', display:'flex', flexDirection:'column'}} type='submit' fullWidth><img className='imgUser' src='https://www.w3schools.com/w3images/avatar2.png' alt=''></img> User</Button>
                    </Grid>
                    <Grid className='btnSignUpOrganizers'>
                    <Button style={{height:'100%', color:'black', display:'flex', flexDirection:'column'}} type='submit' fullWidth><img className='imgOrganizers' src='https://www.w3schools.com/howto/img_avatar.png' alt=''></img> Organizers</Button>
                    </Grid>
                </Grid>
                </Paper>
                <Paper className='right'> 
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // navigation
                    autoplay={{delay: 3000}}
                    pagination={{ clickable: true }}
                    >
                    <SwiperSlide><img style={{width:'100%', height:'670px',objectFit:'cover'}} src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/12/hinh-nen-blackpink-75-696x1116.jpg?fit=700%2C20000&quality=95&ssl=1" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width:'100%', height:'670px',objectFit:'cover'}} src="https://bangxephang.com/wp-content/uploads/2022/08/hinh-nen-blackpink-cho-dien-thoai.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width:'100%', height:'670px',objectFit:'cover'}} src="https://maytinhvui.com/hinh-nen-blackpink/anh-nen-blackpink-5/" alt="" /></SwiperSlide>
                </Swiper>
                </Paper>
            </Paper>
        </Grid>
    </>
  )
}

export default ChoseRole