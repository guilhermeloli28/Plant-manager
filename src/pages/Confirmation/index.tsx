import React, { useState } from "react";
import { Container, Content, Emoji, Title, SubTitle, Footer } from "./styles";
import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😁'
}

function Confirmation() {
    const navigation = useNavigation();
    const routes = useRoute();

    const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Params;

    function handleMoveOn() {
        navigation.navigate(nextScreen);
    }

    return (
        <Container>
            <Content>
                <Emoji>{emojis[icon]}</Emoji>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <Footer>
                    <Button title={buttonTitle} activeOpacity={0.7} width={250} onPress={handleMoveOn} />
                </Footer>
            </Content>
        </Container>
    );
}

export default Confirmation;