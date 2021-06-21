import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, TextCard } from './styles';
import { SvgFromUri } from 'react-native-svg';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

const PlantCard = ({ data, ...rest }: PlantProps) => {
    return (
        <Container {...rest}>
            <SvgFromUri uri={data.photo} width={70} height={70} />
            <TextCard>{data.name}</TextCard>
        </Container>
    );
}

export default PlantCard;