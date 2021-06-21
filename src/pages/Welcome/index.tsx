import React from 'react';
import watering from '../../assets/watering.png';
import { AntDesign } from '@expo/vector-icons';
import { Container, Title, SubTitle, Button, TextButton, ImageFound } from './styles';
import { useNavigation } from '@react-navigation/native';

function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        <Container>
            <Title>Gerencie suas plantas de forma fácil</Title>
            <ImageFound source={watering} />
            <SubTitle>
                Não esqueça de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </SubTitle>
            <Button activeOpacity={0.7} onPress={handleStart}>
                <TextButton>
                    <AntDesign name="caretright" size={14} color="#ffffff" />
                </TextButton>
            </Button>
        </Container>
    );
}

export default Welcome;