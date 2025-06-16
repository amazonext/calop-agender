import { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

// components
import Loading from '../components/Loading';
import ServiceList from '../components/ServiceList';

// hooks
import { useRefresh } from '../hooks/useRefresh';

// styles
import { mySchedulingStyles } from "../assets/styles/mySchedulingStyles";
import { projectPalete } from '../assets/styles/colors';
import { getAllProcedures } from '../utils/scheduling_db';

export default function Services() {
    const [services, setServices] = useState(null);

    const fetchServices = async () => {
        const data = getAllProcedures();

        setServices(data);
    };

    const { refreshing, onRefresh: handleRefresh } = useRefresh(fetchServices);

    useEffect(() => {
        fetchServices();
    }, []);

    if (services === null) return <Loading />;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[projectPalete.color1]}
                        tintColor={projectPalete.color1}
                        progressViewOffset={5}
                    />
                }
            >
                {
                    services.length > 0 ? (
                        <View style={{ padding: 20 }}>
                            <ServiceList data={services} />
                        </View>
                    ) : (
                        <View style={mySchedulingStyles.noSchedulingContent}>
                            <Text style={mySchedulingStyles.noSchedulingText}>
                                Nenhum serviço cadastrado
                            </Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}