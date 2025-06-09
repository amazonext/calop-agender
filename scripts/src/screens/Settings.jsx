import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking, Switch } from "react-native";
import { Ionicons, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

// hooks
import { useUserInfo } from "../hooks/useUserInfo";

// components
import Loading from "../components/Loading";

// styles
import { settingsStyles } from '../assets/styles/settingsStyles';
import { projectPalete } from "../assets/styles/colors";

export default function Settings({ navigation }) {
    const [userInfoUpdate, setUserInfoUpdate] = useState(null);
    const { name, enterprise_name, image_uri } = useUserInfo() || {};

    const [isEnabledEnterpriseSingular, setIsEnabledEnterpriseSingular] = useState(true);
    const toggleSwitchEnterprise = () => setIsEnabledEnterpriseSingular(previousState => !previousState);

    const [isEnabledDate, setIsEnabledDate] = useState(false);
    const toggleSwitchDate = () => setIsEnabledDate(previousState => !previousState);

    // TODO: levar essas constantes pra nova tela de perfil

    // const showToast = (message) => {
    //     setToastMessage(message);
    //     Animated.sequence([
    //         Animated.timing(toastAnim, {
    //             toValue: 0,
    //             duration: 400,
    //             easing: Easing.out(Easing.ease),
    //             useNativeDriver: true,
    //         }),
    //         Animated.delay(2000),
    //         Animated.timing(toastAnim, {
    //             toValue: 100,
    //             duration: 400,
    //             easing: Easing.in(Easing.ease),
    //             useNativeDriver: true,
    //         }),
    //     ]).start();
    // };

    // const handleSave = () => {
    //     setUserInfoUpdate({
    //         ...userInfoUpdate,
    //         name: editedName,
    //         enterprise_name: editedEnterprise
    //     });

    //     setModalVisible(false);
    //     showToast("Informações atualizadas!");
    // };

    if (!name && !enterprise_name && !image_uri) return <Loading />;

    return (
        <View style={settingsStyles.container}>
            <View style={settingsStyles.userBox}>
                <View style={settingsStyles.userInfo}>
                    {image_uri ? (
                        <Image source={{ uri: image_uri }} style={settingsStyles.userPhoto} />
                    ) : (
                        <Ionicons name="person-circle-sharp" size={60} color="#aaa" />
                    )}
                    <View>
                        <Text style={settingsStyles.username}>
                            {(userInfoUpdate?.name || name) ?? 'Nome de usuário indefinido'}
                        </Text>
                        <Text style={settingsStyles.enterprise}>
                            {(userInfoUpdate?.enterprise_name || enterprise_name) ?? 'Nome da empresa ainda não definida'}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                >
                    <FontAwesome6 name="chevron-right" color="#ccc" size={35} />
                </TouchableOpacity>
            </View>

            <View style={settingsStyles.section}>
                <Text style={settingsStyles.sectionTitle}>Ajustes</Text>
                <View style={settingsStyles.infoCard}>
                    <View style={settingsStyles.infoRow}>
                        <View>
                            <Text style={settingsStyles.infoLabel}>Modo empresário autônomo</Text>
                            <Text style={settingsStyles.infoDetail}>A opção de selecionar um profissional é removida</Text>
                        </View>

                        <Switch
                            trackColor={{ true: projectPalete.color9 }}
                            thumbColor={isEnabledEnterpriseSingular ? projectPalete.color12 : "#ECECEC"}
                            onValueChange={toggleSwitchEnterprise}
                            value={isEnabledEnterpriseSingular}
                        />
                    </View>
                    <View style={settingsStyles.infoRow}>
                        <View>
                            <Text style={settingsStyles.infoLabel}>Data por extenso</Text>
                            <Text style={settingsStyles.infoDetail}>A data na lista de agendamentos será exibida por extenso (por exemplo: 10 de maio)</Text>
                        </View>

                        <Switch
                            trackColor={{ true: projectPalete.color9 }}
                            thumbColor={isEnabledDate ? projectPalete.color12 : "#ECECEC"}
                            onValueChange={toggleSwitchDate}
                            value={isEnabledDate}
                        />
                    </View>
                </View>
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