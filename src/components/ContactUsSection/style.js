import styled from "styled-components";

const ContactContainer = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    
    background-color: #F2F2F2;
`

const ContactUsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px;

    .contact-container {
        width: 500px;
        
        .contact-title {
            font-size: 40px;
            font-weight: 700;
            text-transform: uppercase;
        }
        
        .button-phone-div {
            display: flex;
            justify-content: space-around;
            align-items: center;

            margin-top: 40px;

            .phone {
                font-size: 30px;
                line-height: 23px;
                color: rgba(0,0,0,.7);
            }
        }

        .contact-about {
            font-size: 20px;
            line-height: 23px;
            color: rgba(0,0,0,.59);

            margin-top: 25px;
            margin-bottom: 15px;
        }

        .whatsapp-button {
            all: unset;

            width: 190px;
            height: 50px;
            
            font-size: 18px;
            letter-spacing: 2px;
            color: #FFFFFF;
            
            display: flex;
            justify-content: center;
            align-items: center;

            margin: 20px 0;
            
            background-color: #000000;

            border-radius: 300px;

            cursor: pointer;

            img {
                width: 30px;
                height: 30px;

                margin-left: 15px;
            }

            :hover {
                background-color: rgba(0,0,0,.8);
            }
        }
    }
`

const MapDiv = styled.div`
    width: 300px;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 80px;

    background-color: green;
`

export { ContactUsDiv, MapDiv, ContactContainer }