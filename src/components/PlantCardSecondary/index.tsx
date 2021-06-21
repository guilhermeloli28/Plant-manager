import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Container, Title, Details, TimeLabel, Time, ButtonRemove } from './styles';
import { SvgFromUri } from 'react-native-svg';
import { Animated, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    },
    handleRemove: () => void;
}

const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantProps) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <ButtonRemove onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white} />
                        </ButtonRemove>
                    </View>
                </Animated.View>
            )}
        >
            <Container {...rest}>
                <SvgFromUri uri={data.photo} width={50} height={50} />
                <Title>{data.name}</Title>
                <Details>
                    <TimeLabel>Regar ás </TimeLabel>
                    <Time>{data.hour}</Time>
                </Details>
            </Container>
        </Swipeable>
    );
}

export default PlantCardSecondary;