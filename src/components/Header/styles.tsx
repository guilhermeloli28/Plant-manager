import styled from 'styled-components';
import { Text, Image, View } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: ${getStatusBarHeight()};
`;

export const Greetings = styled(Text)`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.text};
`;

export const UserName = styled(Text)`
    font-size: 32px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 40px;
`;

export const Photo = styled(Image)`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;



