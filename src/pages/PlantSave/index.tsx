import React, { useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import {
    Container,
    PlantName,
    PlantAbout,
    Controller,
    TipContainer,
    TipImage,
    TipText,
    AlertLabel,
    PlantInfo,
    ShowDatePicker,
    TextDatePicker
} from './styles';
import waterdrop from '../../assets/waterdrop.png';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import Button from '../../components/Button';
import { useRoute } from '@react-navigation/core';
import { Platform, ScrollView } from 'react-native';
import { format, isBefore } from 'date-fns';
import { Alert } from 'react-native';
import { PlantProps, savePlant } from '../../libs/storage';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

interface Params {
    plant: PlantProps;
}

function PlantSave() {
    const route = useRoute();
    const navigation = useNavigation();

    const { plant } = route.params as Params;
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro!');

        }

        if (dateTime) {
            setSelectedDateTime(dateTime);
            setShowDatePicker(false);
        }
    }

    const handleSave = async () => {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            });

            navigation.navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua planta.',
                buttonTitle: 'Muito obrigado',
                icon: 'hug',
                nextScreen: 'MyPlants'
            });
        } catch {
            Alert.alert('Não foi possível salvar 😅!');
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: colors.shape
            }}
        >
            <Container>
                <PlantInfo>
                    <SvgFromUri uri={plant.photo} height={150} width={150} />
                    <PlantName>{plant.name}</PlantName>
                    <PlantAbout>{plant.about}</PlantAbout>
                </PlantInfo>

                <Controller>
                    <TipContainer>
                        <TipImage source={waterdrop} />
                        <TipText>{plant.water_tips}</TipText>
                    </TipContainer>

                    <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

                    {showDatePicker && <DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime} />}

                    {
                        Platform.OS === 'android' && (
                            <ShowDatePicker onPress={() => setShowDatePicker(true)}>
                                <TextDatePicker>
                                    {format(selectedDateTime, 'HH:mm')}
                                </TextDatePicker>
                            </ShowDatePicker>
                        )
                    }

                    <Button
                        title="Cadastrar planta"
                        activeOpacity={0.7}
                        width={300}
                        onPress={handleSave} />
                </Controller>
            </Container>
        </ScrollView>
    )
};

export default PlantSave;