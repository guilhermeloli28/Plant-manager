import styled from 'styled-components';
import { Text } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
    active?: boolean;
}

export const Container = styled(RectButton) <ContainerProps>`
    background-color: ${props => props.active ? colors.green_light : colors.shape};
    height: 40px;
    width: 76px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 5px;
`;

export const TitleButton = styled(Text) <ContainerProps>`
    color: ${props => props.active ? colors.green_dark : colors.heading};
    font-family: ${props => props.active ? fonts.heading : fonts.text};
`;



