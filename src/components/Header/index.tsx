import React, { useEffect, useState } from 'react';
import { Container, Photo, Greetings, UserName } from './styles';
import { View } from 'react-native';
import user from '../../assets/nando.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');

            setUserName(user || '');
        }

        loadUserName();
    }, []);

    return (
        <Container>
            <View>
                <Greetings>Olá,</Greetings>
                <UserName>{userName}</UserName>
            </View>

            <Photo source={user} />
        </Container>
    );
}

export default Header;