
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '@/components/CustomDrawerContent';
export default function HomeLayout() {
    return (
        <Drawer
            screenOptions={{
                drawerStyle: {
                    width: '70%',
                },
                headerShown: false,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name='index'/>
        </Drawer>
    );
}
