import React, { useState, useEffect } from "react";
import { Container, Title, SubTitle, Content, Plants } from "./styles";
import Header from "../../components/Header";
import EnviromentButton from "../../components/EnviromentButton";
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import api from "../../services/api";
import Load from "../../components/Load";
import PlantCard from "../../components/PlantCard";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/core";
import { PlantProps } from '../../libs/storage';

interface EnviromentProps {
    key: string;
    title: string;
}

function PlantSelect() {
    const navigation = useNavigation();
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const handlePlantSelect = (plant: PlantProps) => {
        navigation.navigate('PlantSave', { plant });
    }

    const handleEnviromentSelected = (enviroment: string) => {
        setEnviromentSelected(enviroment);

        if (enviroment === 'all') return setFilteredPlants(plants);

        const filtered = plants.filter(plant => plant.environments.includes(enviroment));

        setFilteredPlants(filtered);
    }

    const getPlants = async () => {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

        if (!data) return setLoading(true);

        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data]);
            setFilteredPlants(oldValue => [...oldValue, ...data]);
        } else {
            setPlants(data);
            setFilteredPlants(data);
        }
        setLoading(false);
        setLoadingMore(false);
    }

    const handleGetMore = (distance: number) => {
        if (distance < 1) return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        getPlants();
    }

    useEffect(() => {
        const getEnviroment = async () => {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');

            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        getEnviroment();
    }, []);

    useEffect(() => {
        getPlants();
    }, []);

    if (loading)
        return <Load />

    return (
        <Container>
            <Content>
                <Header />

                <Title>Em qual hambiente</Title>
                <SubTitle>você quer colocar sua planta?</SubTitle>
            </Content>

            <View>
                <FlatList
                    data={enviroments}
                    keyExtractor={(item) => String(item.key)}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <EnviromentButton
                            title={item.title}
                            active={item.key === enviromentSelected}
                            onPress={() => handleEnviromentSelected(item.key)} />
                    )}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

            <Plants>
                <FlatList
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <PlantCard data={item} onPress={() => handlePlantSelect(item)} />
                    )}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => handleGetMore(distanceFromEnd)}
                    ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : <></>} />
            </Plants>
        </Container>
    );
}

const styles = StyleSheet.create({
    enviromentList: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        marginTop: 32,
        marginBottom: 25
    }
})

export default PlantSelect;