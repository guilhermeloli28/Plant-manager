import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface TouchableProps {
    width: number;
}

export const Touchable = styled(TouchableOpacity) <TouchableProps>`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 50px;
    height: 56px;
    width: ${props => props.width}
`;

export const TextButton = styled(Text)`
    color: ${colors.white};
    font-family: ${fonts.heading};
`;