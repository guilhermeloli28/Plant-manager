import styled from 'styled-components';
import { View, Text } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    background-color: ${colors.background};
`;

export const Plants = styled(View)`
    flex: 1;
    width: 100%;
`;

export const PlantsTitle = styled(Text)`
    font-size: 24px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    margin-top: 20px;
`;