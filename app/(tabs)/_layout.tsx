import { Tabs } from 'expo-router'
import ActiveHomeIcon from '@/assets/images/active-home.svg'
import ActiveInventoryIcon from '@/assets/images/active-invoice.svg'
import ActiveTransactionIcon from '@/assets/images/active-transaction.svg'
import ActiveReportIcon from '@/assets/images/active-report.svg'
import InactiveHomeIcon from '@/assets/images/inactivehome.svg'
import InactiveInventoryIcon from '@/assets/images/inactive-inventory.svg'
import InactiveTransactionIcon from '@/assets/images/inactive-transaction.svg'
import InactiveReportIcon from '@/assets/images/inactive-report.svg'
import { Platform } from 'react-native'


const TabsLayout = () => {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: "#00000014",
                    paddingTop: 12,
                    height: Platform.OS === 'android' ? 70 : 80
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'DM Sans',
                    fontWeight: 500,
                },
                tabBarActiveTintColor: '#0898A0', // Active tab icon color
                tabBarInactiveTintColor: '#787878', // Inactive tab icon color
            }}
            initialRouteName='(home)/index'
        >
            <Tabs.Screen
                name='(home)/index'
                options={{
                    headerShown: false,
                    title: 'Home',
                    href: '/(tabs)/(home)',
                    tabBarIcon: ({ focused }) => (
                        focused ? <ActiveHomeIcon /> : <InactiveHomeIcon />
                    ),
                }}
            />
            <Tabs.Screen
                name='(inventory)/index'
                options={{
                    headerShown: false,
                    title: 'Inventory',
                    tabBarIcon: ({ focused }) => (
                        focused ? <ActiveInventoryIcon /> : <InactiveInventoryIcon />
                    ),
                }} />
            <Tabs.Screen
                name='(transactions)/index'
                options={{
                    headerShown: false,
                    title: 'Transactions',
                    tabBarIcon: ({ focused }) => (
                        focused ? <ActiveTransactionIcon /> : <InactiveTransactionIcon />),
                }}
            />
            <Tabs.Screen
                name='(reports)/index'
                options={{
                    headerShown: false,
                    title: 'Reports',
                    tabBarIcon: ({ focused }) => (
                        focused ? <ActiveReportIcon /> : <InactiveReportIcon />
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabsLayout