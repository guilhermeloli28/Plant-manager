import styled from 'styled-components';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

export const PlantInfo = styled(View)`
    flex: 1;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.shape};
`;

export const Container = styled(View)`
    flex: 1;
    justify-content: space-between;
    background-color: ${colors.shape};
`;

export const PlantName = styled(Text)`
    font-family: ${fonts.heading};
    font-size: 24px;
    color: ${colors.heading};
    margin-top: 15px;
`;

export const PlantAbout = styled(Text)`
    text-align: center;
    font-family: ${fonts.text};
    color: ${colors.heading};
    font-size: 17px;
    margin-top: 10px;
`;

export const Controller = styled(View)`
    background-color: ${colors.white};
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: ${getBottomSpace() || 20};
    align-items: center;
`;

export const TipContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.blue_light};
    padding: 20px;
    border-radius: 20px;
    position: relative;
    bottom: 80px;
`;

export const TipImage = styled(Image)`
    width: 56px;
    height: 56px;
`;

export const TipText = styled(Text)`
    flex: 1;
    margin-left: 20px;
    font-family: ${fonts.text};
    font-size: 17px;
    text-align: justify;
`;

export const AlertLabel = styled(Text)`
    text-align: center;
    font-family: ${fonts.complement};
    color: ${colors.heading};
    font-size: 12px;
    margin-bottom: 5px;
`;

export const ShowDatePicker = styled(TouchableOpacity)`
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px;
    align-items: center;
`;

export const TextDatePicker = styled(Text)`
    color: ${colors.heading};
    font-family: ${fonts.heading};
    font-size: 20px;
`;