import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const HeaderLogoContainer = styled.div`
    background-color: #F3F7FE;
    width: 236px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #071451;
    font-size: 20px;
    font-weight: bold;
`;

export const HeaderContent = styled.div`
    background-color: #071550;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const HeaderItem = styled.span`
    font-weight: bold;
    color: #fff;
    margin-right: 50px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: RGB(132, 77, 254);
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const HeaderMenu = styled.div`
    display: none;
    margin-right: 20px;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        display: block;
    }
`;