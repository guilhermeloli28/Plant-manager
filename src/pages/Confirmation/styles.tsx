import styled from "styled-components";
import { SafeAreaView, View, Text } from 'react-native';
import colors from "../../styles/colors";
import fonts from '../../styles/fonts';

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: space-around;
`;

export const Content = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
`;

export const Emoji = styled(Text)`
    font-size: 78px;
`;

export const Title = styled(Text)`
    font-size: 22px;
    font-family: ${fonts.heading};
    text-align: center;
    color: ${colors.heading};
    line-height: 38px;
    margin-top: 15px;
`;

export const SubTitle = styled(Text)`
    font-family: ${fonts.text};
    text-align: center;
    font-size: 17px;
    padding-left: 20px;
    padding-right: 20px;
    color: ${colors.heading};
`;

export const Footer = styled(View)`
    align-items: center;
    width: 100%;
    margin-top: 30px;
`;