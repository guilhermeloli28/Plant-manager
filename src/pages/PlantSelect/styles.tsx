import styled from "styled-components";
import { SafeAreaView, View, Text } from 'react-native';
import colors from "../../styles/colors";
import fonts from '../../styles/fonts';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${colors.background};
`;

export const Title = styled(Text)`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 20px;
    margin-top: 15px;
`;

export const SubTitle = styled(Text)`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.text};
    line-height: 20px;
`;

export const Content = styled(View)`
    padding-left: 30px;
    padding-right: 30px;
`;

export const Plants = styled(View)`
    flex: 1;
    justify-content: center;
    padding-left: 32px;
    padding-right: 32px;
`;
