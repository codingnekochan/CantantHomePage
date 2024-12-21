import React, { useEffect } from 'react'
import '../global.css'
import * as SplashScreen from 'expo-splash-screen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font'
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/CustomDrawerContent';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

    const queryClient = new QueryClient();
    const [loaded, error] = useFonts({
        'mDMSans': require('../assets/fonts/DM_Sans/static/DMSans_Medium.ttf'),
        'smDMSans': require('../assets/fonts/DM_Sans/static/DMSans_SemiBold.ttf'),
        'bDMSans': require('../assets/fonts/DM_Sans/static/DMSans_Bold.ttf'),
        'mSpaceGrotesk': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk_Medium.ttf'),
        'smSpaceGrotesk': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk_SemiBold.ttf'),
        'bSpaceGrotesk': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk_Bold.ttf'),
    })
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync()
        }
    }, [loaded, error])

    if (!loaded || error) return null

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <QueryClientProvider client={queryClient}>
                    <Drawer
                        screenOptions={{
                            drawerStyle: {
                                width: '70%',
                            },
                            headerShown: false,
                        }}
                        drawerContent={(props) => <CustomDrawerContent {...props} />}
                    >
                        <Drawer.Screen name='(tabs)' />
                    </Drawer>
                    <StatusBar/>
                </QueryClientProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>

    )
}

export default RootLayout