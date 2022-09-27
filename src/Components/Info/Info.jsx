import {Button} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../images/mine.png'
import { LocalBar } from '@mui/icons-material';

export default function Info() {
  function clicked(event){
    if(event.currentTarget.id==='github'){
      console.log(event.currentTarget.id)
      location.href='https://github.com/Mujtaba-Abbasi'
    }else if(event.currentTarget.id==='linkedIn'){
      console.log(event.currentTarget.id)
    }
  }
  return (
    <div className='infoDiv'>
      <img className='profileImage' alt="Profile " src={profile} />
      <h2>Ghulam Mujtaba</h2>
      <h4>Web Developer</h4>
      <p>mujtaba.com</p>
      <div className="buttonWrap">
        <Button onClick={clicked} id='github' sx={{background: 'white', width:'115px' ,color: 'black', textTransform:'none'}} variant='contained'startIcon={<GitHubIcon/>}>GitHub</Button>
        <Button onClick={clicked} id='linkedIn' sx={{textTransform:'none', width:'115px'}} variant='contained' startIcon={<LinkedInIcon/>}>LinkedIn</Button>
      </div>
    </div>
  );
}
