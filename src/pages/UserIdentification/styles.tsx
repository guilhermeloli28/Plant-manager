import styled from "styled-components";
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import colors from "../../styles/colors";
import fonts from '../../styles/fonts';

interface FieldProps {
    isFocused: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const Content = styled(View)`
    flex: 1;
    width: 100%;
`;

export const Form = styled(View)`
    flex: 1;
    justify-content: center;
    padding: 54px;
    align-items: center;
`;

export const Emoji = styled(Text)`
    font-size: 44px;
`

export const Field = styled(TextInput) <FieldProps>`
    border-bottom-width: 2px;
    border-color: ${props => props.isFocused ? colors.green : colors.gray};
    color: ${colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    text-align: center;
`;

export const QuestionName = styled(Text)`
    color: ${colors.heading};
    font-size: 24px;
    text-align: center;
    font-family: ${fonts.heading};
    line-height: 32px;
    margin-top: 20px;
`;

export const ButtonConfirm = styled(View)`
    margin-top: 40px;
`;