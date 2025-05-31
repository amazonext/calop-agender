import { useState, useRef } from "react";
import { View, Text, Image, Button, TouchableOpacity, Linking, Animated, Easing, Alert } from "react-native";
import { query } from "../helpers/db";
import { Ionicons, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

// hooks
import { useUserInfo } from "../hooks/useUserInfo";

// components
import Loading from "../components/Loading";

// styles
import { settingsStyles } from '../assets/styles/settingsStyles';

export default function Settings({ navigation }) {
    const [userInfoUpdate, setUserInfoUpdate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEnterprise, setEditedEnterprise] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const toastAnim = useRef(new Animated.Value(100)).current;
    const [editedImage, setEditedImage] = useState(null);
    const useUser = useUserInfo();

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
        setUserInfoUpdate({
            ...userInfoUpdate,
            name: editedName,
            enterprise_name: editedEnterprise
        });

        setModalVisible(false);
        showToast("Informações atualizadas!");
    };

    if (useUser === null) return <Loading />;

    const handlePickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert("Permissão negada", "Você precisa permitir o acesso às imagens.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [1, 1],
        });

        if (!result.canceled) setEditedImage(result.assets[0].uri);
    };

    return (
        <View style={settingsStyles.container}>
            <View style={settingsStyles.userBox}>
                <View style={settingsStyles.userInfo}>
                    {useUser?.image_uri ? (
                        <Image source={{ uri: useUser.image_uri }} style={settingsStyles.userPhoto} />
                    ) : (
                        <Ionicons name="person-circle-sharp" size={60} color="#aaa" />
                    )}
                    <View>
                        <Text style={settingsStyles.username}>
                            {(userInfoUpdate?.name || useUser.name) ?? 'Nome de usuário indefinido'}
                        </Text>
                        <Text style={settingsStyles.enterprise}>
                            {(userInfoUpdate?.enterprise_name || useUser.enterprise_name) ?? 'Nome da empresa ainda não definida'}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        // setEditedName((userInfoUpdate?.name ?? useUser.name) || '');
                        // setEditedEnterprise((userInfoUpdate?.enterprise_name ?? useUser.enterprise_name) || '');
                        // setModalVisible(true);

                        navigation.navigate("Profile");
                    }}
                >
                    <FontAwesome6 name="chevron-right" color="#ccc" size={35} />
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
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5
                        }}>
                            <Text
                                style={settingsStyles.linkValue}
                                onPress={() => Linking.openURL('https://theheapsters.github.io/calop-agender/presentation/')}
                            >
                                Calop Agender
                            </Text>
                            <FontAwesome5 name="link" size={12} color="#ccc" />
                        </View>
                    </View>
                </View>
            </View>

            {/* <Animated.View style={[
                settingsStyles.toastContainer,
                { transform: [{ translateY: toastAnim }] }
            ]}>
                <Text style={settingsStyles.toastText}>{toastMessage}</Text>
            </Animated.View> */}
        </View>
    );
}