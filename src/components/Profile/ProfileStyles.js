import styled from 'styled-components'

export const ProfileWrapper = styled.div`
   
    margin-top: 50px;
    background: var(--clr-allCards);
    border-radius: 20px;


    .upperProfile{
       
        display:flex;
        justify-content:center;
        align-items: center;
        color:white;
        background: var(--clr-profile);
        border-radius: 20px;
        padding: 20px;

        img{
            width: 65px;
            aspect-ratio:1;
            border: 3px solid white;
            border-radius: 50%;
            margin-right: 20px;
        }
        
        .h1{
            color:var(--clr-text1);
        }

        .report{
            font-size: 1rem;
            font-weight: 300;
        }
        
        .bigName{
            font-size: 1.5rem;
            font-weight: 400;
        }
     
    }

    ul{
        list-style:none;
        display:flex;
        justify-content: space-around;
        color: var(--clr-text1);
        padding: 20px 0;
        font-weight: 300;
        font-size: 1.2rem;
    }

    .active{
        color: white;
        font-weight: 500;
    }

  
`