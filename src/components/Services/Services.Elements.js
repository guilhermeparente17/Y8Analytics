import styled from 'styled-components';

export const ServicesContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: #F2F7FE;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

export const ServiceTitle = styled.h1`
    margin-top: 100px;
    font-size: 40px;
    color: #2E2E2F;
    font-weight: 700;
`;

export const ServiceContent = styled.div`
    width: 90%;
    height: 100%;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const ServiceSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: ${props => props.reverse ? 'row-reverse' : ''};
`;

export const SectionImg = styled.img`
    width: 350px;
    height: 350px;
    margin-right: 50px;

    @media screen and (max-width: 700px) {
        margin-right: 0px;
        width: 250px;
        height: 250px;
    }
`;

export const SectionInfo = styled.div`
    margin-right: 50px;

    @media screen and (max-width: 700px) {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 0px;
        padding: 0px 20px;
    }
`;

export const SectionTitle = styled.h3`
    
`;

export const SectionText = styled.p`
    width: 400px;
    line-height: 30px;
    word-break: break-all;

    @media screen and (max-width: 700px) {
        width: 100%;
        text-align: center;
    }
`;