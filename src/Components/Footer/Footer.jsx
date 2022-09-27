import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer (){
    return(
        <div className='footerWrapper'>
            <a href="https://web.facebook.com/mujtaba.abbasi786"><FacebookIcon/></a>
            <a href='#'><TwitterIcon/></a>
            <a href='#'><EmailIcon/></a>
            <a href='#'><InstagramIcon/></a>        
        </div>
    )
}