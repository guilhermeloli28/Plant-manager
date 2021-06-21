import React from 'react';
import { Container, TitleButton } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

const EnviromentButton = ({ title, active = false, ...rest }: EnviromentButtonProps) => {
    return (
        <Container active={active} {...rest}>
            <TitleButton active={active}>{title}</TitleButton>
        </Container>
    );
}

export default EnviromentButton;