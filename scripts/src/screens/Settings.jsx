import { useEffect, useState, useRef } from "react";
import { View, Text, Image, Button, TouchableOpacity, Linking, Animated, Easing } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfos } from "../utils/user_db";
import { query } from "../helpers/db";
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

// components
import LoadingScreen from "../components/LoadingScreen";
import ModalSettings from "../components/ModalSettings";

// styles
import { settingsStyles } from '../assets/css/settingsStyles';

export default function Settings() {
    const [userInfo, setUserInfo] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEnterprise, setEditedEnterprise] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const toastAnim = useRef(new Animated.Value(100)).current;

    const showToast = (message) => {
        setToastMessage(message);
        Animated.sequence([
            Animated.timing(toastAnim, {
                toValue: 0,
                duration: 400,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(toastAnim, {
                toValue: 100,
                duration: 400,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handleSave = () => {
        setUserInfo({
            ...userInfo,
            name: editedName,
            enterprise_name: editedEnterprise
        });

        setModalVisible(false);
        showToast("Informações atualizadas!");
    };

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUserInfos();
            setUserInfo(data);
        };

        fetchUser();
    }, []);

    const handleResetOnboarding = async () => {
        await AsyncStorage.removeItem('hasSeenOnboarding');
        await AsyncStorage.removeItem('hasSeenRegister');
        console.log('A tela de introdução será exibida na próxima vez que o app for aberto.');
    };

    if (userInfo === null) return (<LoadingScreen message="Carregando informações" />);

    return (
        <View style={settingsStyles.container}>
            <View style={settingsStyles.userBox}>
                {userInfo.image_uri ? (
                    <Image source={{ uri: userInfo.image_uri }} style={settingsStyles.userPhoto} />
                ) : (
                    <Ionicons name="person-circle-sharp" size={60} color="#aaa" />
                )}

                <View>
                    <Text style={settingsStyles.name}>{userInfo?.name || 'Nome de usuário indefinido'}</Text>
                    <Text style={settingsStyles.enterprise}>{userInfo?.enterprise_name || 'Nome da empresa ainda não definida'}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        setEditedName(userInfo?.name || '');
                        setEditedEnterprise(userInfo?.enterprise_name || '');
                        setModalVisible(true);
                    }}
                >
                    <FontAwesome6 name="edit" color="#ccc" size={30} />
                </TouchableOpacity>
            </View>

            <View style={settingsStyles.section}>
                <Text style={settingsStyles.sectionTitle}>App info</Text>
                <View style={settingsStyles.infoCard}>
                    <View style={settingsStyles.infoRow}>
                        <Text style={settingsStyles.infoLabel}>Versão</Text>
                        <Text style={settingsStyles.infoValue}>1.0.0</Text>
                    </View>
                    <View style={settingsStyles.infoRow}>
                        <Text style={settingsStyles.infoLabel}>SDK Version</Text>
                        <Text style={settingsStyles.infoValue}>53.0.0</Text>
                    </View>
                    <View style={[settingsStyles.infoRow, { borderBottomWidth: 0 }]}>
                        <Text style={settingsStyles.infoLabel}>Site do Projeto</Text>
                        <Text
                            style={settingsStyles.linkValue}
                            onPress={() => Linking.openURL('https://theheapsters.github.io/calop-agender/presentation/')}
                        >
                            Link
                        </Text>
                    </View>
                </View>
            </View>

            <ModalSettings
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                editedName={editedName}
                setEditedName={setEditedName}
                editedEnterprise={editedEnterprise}
                setEditedEnterprise={setEditedEnterprise}
                handleSave={handleSave}
            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Reset" onPress={handleResetOnboarding} />
                <Button title="Select All" onPress={() => console.log(getUserInfos())} />
                <Button title="Drop table" onPress={() => query('DELETE FROM user_infos')} />
            </View>

            <Animated.View style={[
                settingsStyles.toastContainer,
                { transform: [{ translateY: toastAnim }] }
            ]}>
                <Text style={settingsStyles.toastText}>{toastMessage}</Text>
            </Animated.View>
        </View>
    );
}