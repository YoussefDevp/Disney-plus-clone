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
                
                </PlayButton>
                <TrailerButton>
                    
                </TrailerButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>
                            
                </GroupWatchButton> 
            </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
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

   img {
       width: 100%;
       height: 100%;
       object-fit: contain;   
   }
`

const Controls = styled.div`
`

const PlayButton = styled.div`
` 

const TrailerButton = styled.div`
`

const AddButton = styled.div`
`

const GroupWatchButton = styled.div`

`
