import styled from 'styled-components';
import { SafeAreaView, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding-left: 40px;
    padding-right: 40px;
`;

export const Title = styled(Text)`
    font-family: ${fonts.heading};
    font-size: 28px;
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
    width: 225px;
`;

export const SubTitle = styled(Text)`
    text-align: center;
    font-size: 16px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
`;

export const ImageFound = styled(Image)`
    height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Button = styled(TouchableOpacity)`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 50px;
    height: 56px;
    width: 70px;
`;

export const TextButton = styled(Text)`
    color: ${colors.white};
    font-family: ${fonts.heading};
`;

