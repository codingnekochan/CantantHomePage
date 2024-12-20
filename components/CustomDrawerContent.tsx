import { View, Text, Pressable, } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import CustomerIcon from '@/assets/images/customer.svg'
import TodoIcon from '@/assets/images/todo.svg'
import InvoiceReceiptIcon from '@/assets/images/invoice-M.svg'
import TeamIcon from '@/assets/images/team.svg'
import ShareIcon from '@/assets/images/share.svg'
import TutorialIcon from '@/assets/images/tutorial.svg'
import ProblemIcon from '@/assets/images/problem.svg'
import ChevronDown from '@/assets/images/chevron-blue.svg'
import EllipseIcon from '@/assets/images/ellipse.svg'

const DrawerItem = ({
    customerIcon,
    invoiceIcon,
    todoIcon,
    teamIcon,
    shareIcon,
    tutorialIcon,
    problemIcon,
    label,
    onPress,
    comingSoon }: any) => (
    <Pressable
        onPress={onPress}
        className="flex-row items-center  px-4 py-3 active:bg-gray-100"
    >
        <View className='w-6 items-center justify-center'>
            {customerIcon && <CustomerIcon style={{ width: 24 }} />}
            {invoiceIcon && <InvoiceReceiptIcon style={{ width: 24 }} />}
            {todoIcon && <TodoIcon style={{ width: 24 }} />}
            {teamIcon && <TeamIcon style={{ width: 24 }} />}
            {shareIcon && <ShareIcon style={{ width: 24 }} />}
            {tutorialIcon && <TutorialIcon style={{ width: 24 }} />}
            {problemIcon && <ProblemIcon style={{ width: 24 }} />}
        </View>
        <Text className="ml-3 text-base font-medium font-SpaceGrotesk">{label}</Text>
        {comingSoon && (
            <View className='bg-[#F3F7F7] px-2 py-[2px] rounded-[3px] self-end ml-6'>
                <Text className="ml-2 text-sm text-brand font-DMSans">Coming soon</Text>
            </View>
        )}
    </Pressable>
);

export default function CustomDrawerContent(props: any) {

    return (
        <DrawerContentScrollView {...props} className="flex-1 bg-white">
            {/* Header */}
            <View className="p-4 pt-0 border-b border-gray-200">
                <View className="flex-row justify-between items-start mb-6">
                    <View className="">
                        <View className="w-10 h-10 rounded-full bg-blue-600 justify-center items-center relative">
                            <Text className="text-white text-xl font-SpaceGrotesk">MS</Text>
                            <View className='absolute bottom-0 right-0'>
                                <EllipseIcon />
                            </View>
                        </View>
                        <View className="mt-4">
                            <Text className="text-lg font-SpaceGrotesk font-medium">Masin Stitches</Text>
                            <Pressable className="flex-row items-center mt-1 gap-x-2">
                                <Text className="text-brand text-xs font-SpaceGrotesk font-medium">Manage businesses</Text>
                                <ChevronDown />
                            </Pressable>
                        </View>
                    </View>
                    <Pressable
                        className="p-2 bg-gray-50 rounded-md"
                    >
                        <Text className="text-brand font-DMSans text-xs font-medium">Settings</Text>
                    </Pressable>
                </View>
            </View>

            {/* Drawer Items */}
            <View className="mt-8">
                <DrawerItem
                    customerIcon
                    label="Customers & Suppliers"
                />
                <DrawerItem
                    invoiceIcon
                    label="Invoices & Receipts"
                />
                <DrawerItem
                    todoIcon
                    label="Your to-do list"
                />
            </View>

            {/* Bottom Section */}
            <View className=" mt-[265px] pt-4 border-t border-gray-200">
                <DrawerItem
                    teamIcon
                    label="Your team"
                    comingSoon={true}
                />
                <DrawerItem
                    shareIcon
                    label="Share with a friend"
                />
                <DrawerItem
                    tutorialIcon
                    label="Tutorials"
                />
                <DrawerItem
                    problemIcon
                    label="Report a problem"
                />
            </View>
        </DrawerContentScrollView>
    );
}
