import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://cadenaser00.epimg.net/ser/imagenes/2019/09/19/el_cine_en_la_ser/1568875759_144492_1568878699_noticia_normal.jpg" />
            </Background>
            <ImgTitle>
                <img src="https://i.pinimg.com/originals/e6/df/e9/e6dfe9a466e338d67e88629e0566f0a5.png" />
            </ImgTitle> 

            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                    <span>TRAILER </span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                       <img src="/images/group-icon.png" />     
                </GroupWatchButton> 
            </Controls>
            <SubTitle>
                2018 * 7m * Family, Fanstasy, Kids, Animation
            </SubTitle>
            <Description>
            Toy Story 4 sees the return of Woody, Buzz and the whole gang, far from home, discovering new friends—and old ones—on an eye-opening road trip that takes them to unexpected places.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:  calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
   opacity: 0.8;

   img {
       width: 100%;
       height: 100%;
       object-fit: cover;
   }
`
const ImgTitle = styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vw;
   min-width: 200px;
   margin-top: 60px;

   img {
       width: 100%;
       height: 100%;
       object-fit: contain;   
   }
`

const Controls = styled.div`
   display: flex;
   align-items: center;
`

const PlayButton = styled.button`
   border-radius: 5px;
   display: flex;
   align-items: center;
   padding: 0px 24px;
   margin-right: 22px;
   height: 56px;
   background: rgb(249, 249, 249);
   border: none;
   letter-spacing: 1.8px;
   cursor: pointer;

   &:hover {
    background: rgb(198, 198, 198);
   }
` 

const TrailerButton = styled(PlayButton)`
   background: rgba(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
   color: rgb(249, 249, 249); 
`

const AddButton = styled.button`
   margin-right: 16px;
   width: 44px;
   height: 44px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: 2px solid white;
   background-color: rgba(0, 0, 0, 0.6);
   cursor: pointer;

   span {
       font-size: 30px;
       color: white;
   }
`

const GroupWatchButton = styled(AddButton)`
   background: rgb(0,0,0);
`

const SubTitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
`

const Description = styled.div`
   line-height: 1.4;
   font-size: 20px;
   margin-top: 16px;
   color: rgb(249, 249, 249);
   max-width: 760px;
`
