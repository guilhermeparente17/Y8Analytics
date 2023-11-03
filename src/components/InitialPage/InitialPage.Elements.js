import styled from 'styled-components';

export const InitialContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 400px) {
        height: 600px;
    }
`;

export const GrayOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(7, 21, 80, 0.8);
    z-index: 2;
`;

export const InitialBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const InitialContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
`;

export const InitialTitle = styled.h1`
    color: #fff;
    font-weight: bold;
    font-size: 65px;
    text-align: center;
    margin-bottom: 50px;

    @media screen and (max-width: 700px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 30px;
    }
`;

export const InitialButtom = styled.button`
    width: 202px;
    height: 49px;
    border-radius: 20px;
    background-color: #854DFF;
    color: #fff;
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: bold;

    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #854DFF;
        transition: 0.2s ease-in-out;
    }
`;
