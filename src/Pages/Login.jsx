import React from 'react'
import '../CSS/Login.css'
import { Grid ,Paper, TextField, FormControl, InputLabel, OutlinedInput, Checkbox, IconButton, InputAdornment, Button, FormControlLabel, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
    <>
        <Grid className='login'>
            <Paper className='loginGrid' style={{boxShadow:"rgb(223 193 34 / 51%) 0px 1px 15px 15px"}}>
                <Paper className='left' fullWidth >
                <Grid className='logoGrid'>
                <Button>
                    <h1 className='logo'>TIKSEAT</h1>
                </Button>
                </Grid>
                <Grid fullWidth>
                    <p style={{textAlign:'start'}}>Login to access your TikSeat account</p>
                </Grid>
                <Grid>
                    <h2 style={{textAlign:'start', fontFamily: 'Bree Serif'}}>Login</h2>
                </Grid>
                <TextField
                    style={{marginBottom:'20px'}}
                    className='email'
                    label='Email'
                    placeholder='Email'
                    fullWidth
                    required
                    type='email'
                    
                />
                <FormControl variant="outlined" fullWidth style={{marginBottom:'20px'}}>
                    <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end" variant='standard'>
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    />
                </FormControl>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                <FormControlLabel 
                    control={
                    <Checkbox/>
                    } label="Remember me" 
                />
                <Link style={{padding:'10px', color:'#F5BD19', textDecoration:'none'}} href="#">Forgot password ?</Link>
                </div>
                
                <Grid className='btnLogin'>
                    <Button style={{padding:'10px', color:'black', fontWeight:'bold', fontSize:'18px'}} type='submit' fullWidth> Login</Button>
                </Grid>
                <Grid className='btnLoginGG'>
                    <Button style={{padding:'10px', color:'black', }} type='submit' fullWidth ><GoogleIcon style={{fontSize: "xx-large"}}/> &ensp; Sign in with your google account</Button>
                </Grid>
                <Grid style={{margin:'20px 0px 20px 0px'}}>
                    <span>Don't have a account? <Link style={{ color:'#F5BD19', textDecoration:'none'}} href="#">Sign up</Link> </span>
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

export default Login