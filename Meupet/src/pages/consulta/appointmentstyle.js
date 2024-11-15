import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    
    img {
        width: 100px;
        height: auto;
    }
    
    .veterinaryCenter {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    h1 {
        font-size: 24px;
        color: #2A4F6A;
    }

    h2 {
        font-size: 18px;
        color: #2A4F6A;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 20px 0;
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;

    a {
        color: #2A4F6A;
        font-size: 16px;
        text-decoration: none;
    }
`;

export const TextInput = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    margin: 20px 0;
`;

export const CheckboxInput = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin: 20px 0;

    h1 {
        font-size: 18px;
        color: #2A4F6A;
        margin-bottom: 8px;
    }

    .checkboxDiv {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`;

export const Observetion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 20px 0;

    button {
        background-color: #2A4F6A;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 10px;
        
        &:hover {
            background-color: #1F3B4D;
        }
    }
`;
