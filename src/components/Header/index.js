import logo from '../../assets/logo.jpg'
import { HeaderDiv } from './style';

export default function Header() {
    return (
        <HeaderDiv>
            <img src={logo} alt="" />
            <h1>Rafa Barber</h1>
        </HeaderDiv>
    );
}