import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

const Newsletter = () => {
    return (
        <Container>
            <Title></Title>
            <Description></Description>
            <InputContainer>
                <Input />
                <Button>
                    <Icon>
                        <SendIcon />
                    </Icon>
                </Button>
            </InputContainer>
        </Container>
    );
};
export default Newsletter;