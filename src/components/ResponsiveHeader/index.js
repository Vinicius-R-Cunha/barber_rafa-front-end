import { Container, Icons } from "./style";
import { MdOutlineMenu } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/logo.jpg";

export default function ResponsiveHeader() {
    return (
        <Container>
            <img className="logo-image-tablet" src={logo} alt="" />
            <Icons>
                <MdOutlineMenu className="tablet-icon" />
                <BsPersonCircle className="tablet-icon" />
            </Icons>
        </Container>
    );
}
