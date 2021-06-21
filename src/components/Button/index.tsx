import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Touchable, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    activeOpacity: number;
    title: string;
    width: number;
}

const Button: React.FC<ButtonProps> = ({ activeOpacity, title, ...rest }) => {
    return (
        <Touchable activeOpacity={activeOpacity} {...rest} >
            <TextButton>{title}</TextButton>
        </Touchable>
    );
}

export default Button;