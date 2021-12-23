import styled from 'styled-components'

export const GridItemWrapper = styled.div`
    color: white;
    background: blue;
    border-radius: 20px;
    overflow:hidden;

    .gridItemInnerContent{
        margin-top:40px;
        padding: 20px;
        background: var(--clr-allCards);
        border-radius: 20px 20px 0 0;
    }


    .topRow{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto 20px auto;
    }

    h2{
        font-size: 1.2rem;
        font-weight:500;
    }

    img{
    }

    .bottomRow{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }

    .currentTime{
        font-size: 1.6rem;
        font-weight: 300;
    }

    .previousTime{
        font-size: 1rem;
        font-weight: 300;
        opacity: 0.8;
    }



`