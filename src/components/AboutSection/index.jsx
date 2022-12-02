import {
  Container,
  AboutContainer,
  ProfileImage,
  InfoContainer,
  BarberName,
  AdressPhone,
  Description,
  Paragraph,
} from "./style";
import SocialIcons from "../SocialIcons";
import rafa from "../../assets/rafa_placeholder.jpg";

export default function AboutSection() {
  return (
    <Container>
      <AboutContainer>
        <ProfileImage src={rafa} alt="" />
        <InfoContainer>
          <BarberName>Rafa Macedo</BarberName>

          <AdressPhone>
            <p>Contato: (11) 98747-9047</p>
            <p>Rua Itinguçu, 1085, 03658-010, São Paulo</p>
          </AdressPhone>
          <Description>
            <Paragraph>
              Comecei na profissão muito cedo, venho de uma família de
              profissionais da beleza. Minha Avó materna foi cabeleireira, e ali
              mesmo no salão dela, eu ainda muito novo e muito curioso achava um
              máximo aquelas máquinas de aquecer a cabeça, as perucas, e tudo
              que ali eu encontrava, e já me identificava com o salão de beleza
              mesmo muito novo. Sem perceber, a minha vida foi moldada com esses
              pequenos fragmentos, tenho tios, prima, amigo que são da área da
              beleza, até mesmo meu pai e irmão já trabalharam em salão quando
              mais novos. Acho que já sabia o que eu queria inconscientemente, e
              com 15 anos recebi a proposta de trabalhar no Salão de
              cabeleireiro Felipes, onde logo se tornou minha sala de aula e
              minha casa onde aprendi a profissão e onde me desenvolvi como
              profissional.
            </Paragraph>
            <Paragraph>
              Hoje, 14 anos depois tenho colhido os frutos das sementes que
              plantei em toda a trajetória até aqui, sou extremamente grato aos
              amigos que fiz, aos clientes que passaram pelas minhas mãos, e
              pelas famílias que conheci. Sei que ainda há muita lenha pra
              queimar e muitos cabelos para cortar, mas hoje com 29 anos, casado
              há 12 e pai de dois lindos meninos, sei que cada fragmento da
              minha vida que me trouxe para essa profissão foi colocada por
              Deus, pois faço o que amo e amo esse relacionamento que tenho com
              os meus clientes, pessoas das quais se envolvem comigo e me ajudam
              a ser melhor a cada dia. O que tenho a dizer acima de tudo, é
              obrigado por confiar no meu trabalho até aqui.
            </Paragraph>
          </Description>
          <SocialIcons />
        </InfoContainer>
      </AboutContainer>
    </Container>
  );
}
