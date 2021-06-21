import styled from 'styled-components';
import { Text, Image, View } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${colors.shape};
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    margin: 10px;
`;

export const TextCard = styled(Text)`
    color: ${colors.green_dark};
    font-family: ${fonts.heading};
    font-size: 12px
`;


