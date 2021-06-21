import React, { useState, useEffect } from 'react';
import { Container, Plants, PlantsTitle } from './styles';
import Header from '../../components/Header';
import { FlatList } from 'react-native';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import Load from '../../components/Load';
import { Alert } from 'react-native';

function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);

    const handleRemove = (plant: PlantProps) => {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await removePlant(plant.id);

                        setMyPlants(oldData => oldData.filter(item => item.id !== plant.id));

                    } catch (error) {
                        Alert.alert('Não foi possivel remover');
                    }
                }
            }
        ])
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStorage = await loadPlant();

            setMyPlants(plantsStorage);
            setLoading(false);
        }

        loadStorageData();
    }, []);

    if (loading)
        return <Load />

    return (
        <Container>
            <Header />

            <Plants>
                <PlantsTitle>Próximas regadas</PlantsTitle>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary
                            data={item}
                            handleRemove={() => handleRemove(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </Plants>
        </Container>
    )
}

export default MyPlants;