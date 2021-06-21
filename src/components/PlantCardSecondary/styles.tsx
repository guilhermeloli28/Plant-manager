import styled from 'styled-components';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.shape};
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Title = styled(Text)`
    flex: 1;
    margin-left: 10px;
    font-family: ${fonts.heading};
    font-size: 17px;
    color: ${colors.heading};
`;

export const Details = styled(View)`
    align-items: flex-end;
`;

export const TimeLabel = styled(Text)`
    font-size: 16px;
    font-family: ${fonts.text};
    color: ${colors.body_light};
`;

export const Time = styled(Text)`
    margin-top: 5px;
    font-size: 16px;
    font-family: ${fonts.heading};
    color: ${colors.body_dark};
`;

export const ButtonRemove = styled(RectButton)`
    width: 100px;
    height: 105px;
    background-color: ${colors.red};
    margin-top: 15px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 20px;
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 25px;
    padding-bottom: 25px;
`;



