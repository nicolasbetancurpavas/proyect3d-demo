import img1 from '../../assets/img/img-1.jpg'
import './desktop.css'
import './mobile.css'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export const Carousel = () => {
    return (
        <div className='carousel'>
            <div className='info'>
                <h2>Impresiones 3D personalizadas <br /> para dar vida a tus ideas</h2>
                <button className='btn-carousel'>Conoce lo que hacemos
                    <KeyboardArrowDownRoundedIcon />
                </button>
            </div>
            <ul className='carousel__container'>
                <li className='carousel__item'>
                    <img alt='img-carousel' src={img1} className='img__carousel' />
                </li>
            </ul>
        </div >
    )
}