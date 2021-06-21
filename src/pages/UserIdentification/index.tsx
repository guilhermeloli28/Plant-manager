import React, { useState } from "react";
import { Container, Content, Form, Emoji, Field, QuestionName, ButtonConfirm } from "./styles";
import Button from '../../components/Button';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserIdentification() {
    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    const handleInputFocus = () => setIsFocused(true);

    const handleInputChange = (value: string) => {
        setIsFilled(!!value);
        setName(value);
    }

    async function handleSubmit() {
        if (!name) return Alert.alert('Digite seu nome 😥');

        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation', {
                title: 'Pronto',
                subtitle: 'Agora vamos começar a cuidar das suas plantas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            });
        } catch {
            Alert.alert('Não foi possível salvar o nome do usuário');
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Content>
                        <Form>
                            <Emoji>🙂</Emoji>
                            <QuestionName>Como podemos chamar você?</QuestionName>
                            <Field
                                placeholder="Digite seu nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                isFocused={isFocused || isFilled}
                                onChangeText={handleInputChange}
                            />
                            <ButtonConfirm>
                                <Button
                                    title="Confirmar"
                                    activeOpacity={0.7}
                                    width={300}
                                    onPress={handleSubmit} />
                            </ButtonConfirm>
                        </Form>
                    </Content>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
}

export default UserIdentification;