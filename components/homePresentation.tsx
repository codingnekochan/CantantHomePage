import Notification from '@/assets/images/Bell_fill.svg'
import Hamburger from '@/assets/images/hamburger.svg'
import ChevronDown from '@/assets/images/chevron-down.svg'
import ChevronDownM from '@/assets/images/chevrondown.svg'
import ChevronUp from '@/assets/images/chevronup.svg'
import AddButton from '@/assets/images/add.svg'
import PouchIcon from '@/assets/images/pouch.svg'
import Animated from 'react-native-reanimated'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import TransactionCardComponent from '@/components/transactionCardComponent'

const HomePresentation = ({
    isOpen,
    handleOpenBalance,
    animatedStyle,
    setIsVisibleTransaction,
    isLoading,
    error,
    mockData,
    navigation,
    handleOpenDrawer,
    sales
}: any) => {

    return (
        <ScrollView className='bg-brand flex-1 pt-16'>
            <View className='relative items-center px-6 h-[175px]'>
                <View className=' flex-row justify-between pb-[144px] w-full'>
                    <TouchableOpacity
                        onPress={() => {
                            handleOpenDrawer()
                            navigation.toggleDrawer()
                        }}
                    >
                        <Hamburger />
                    </TouchableOpacity>
                    <View>
                        <Notification width={24} height={24} />
                    </View>
                </View>
                <View className='card bg-white px-4 py-6 absolute top-[90px] w-full z-50 shadow-multi rounded-[5px] items-center'>
                    <View className='mx-auto mb-10'>
                        <TouchableOpacity className='py-[6px] px-[14px] border border-customGray rounded-[4px]'>
                            <View className='flex-row items-center gap-[6px]'>
                                <Text className='font-DMSans font-medium text-sm text-customGray'>Today</Text>
                                <ChevronDownM />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text className='font-DMSans font-medium text-sm text-customGray mb-2 text-center'>Your Balance</Text>
                        {isLoading ? null :
                            <Text className='text-brand font-SpaceGrotesk font-bold text-2xl mb-[26px]'>
                                ₦{(parseFloat(mockData?.total.transaction_credit.replace(/,/g, "")) - parseFloat(mockData?.total.transaction_debit.replace(/,/g, ""))).toLocaleString("en-US")}.
                                <Text className='text-base'>00</Text>
                            </Text>}
                    </View>
                    <Animated.View
                        style={[animatedStyle, { overflow: "hidden" }]}
                        className='gap-y-2 justify-center w-full'
                    >
                        <View className='flex-row justify-between '>
                            <Text className='font-DMSans text-customGray text-xs'>Money In</Text>
                            {isLoading ? null : <Text className='text-base font-SpaceGrotesk font-bold text-brand'>₦ {parseFloat(mockData?.total.transaction_credit).toLocaleString("en-US")}.
                                <Text className='text-xs'>00</Text>
                            </Text>}
                        </View>
                        <View className='flex-row justify-between'>
                            <Text className='font-DMSans text-customGray text-xs'>Money Out</Text>
                            {isLoading ? null : <Text className='text-[#E8390E] text-base font-SpaceGrotesk font-bold'> ₦ {parseFloat(mockData?.total.transaction_debit).toLocaleString("en-US")}.
                                <Text className='text-xs'>00</Text>
                            </Text>}
                        </View>
                    </Animated.View>
                    <View className='absolute -bottom-[6%]'>
                        <TouchableOpacity
                            onPress={handleOpenBalance}
                            className='bg-brand py-2 px-[5px] rounded-[3px]'>
                            {isOpen ? <ChevronUp /> : <ChevronDown />}
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='w-[90%] bg-[#07C5CF80] rounded-[5px] h-[100px] z-40 absolute top-[78px] shadow-multi'></View>
                <View className='w-[80%]  bg-[#0DA6AF66] rounded-[5px] h-[100px] z-30 absolute top-[68px] shadow-multi'></View>
            </View>
            <View className='bg-white pt-[202px] h-full px-6 '>
                <View className=' items-center'>
                    <TouchableOpacity
                        onPress={() => setIsVisibleTransaction(true)}
                        className='bg-brand w-full py-[14px] rounded-[5px]'>
                        <View className='flex-row justify-center items-center gap-x-2'>
                            <AddButton />
                            <Text className='text-white font-DMSans text-[15px] font-semibold'>New Transaction</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className='mt-7 mb-10'>
                    <Text className='font-SpaceGrotesk font-medium text-lg mb-4'>Business Updates</Text>
                    <View className='bg-[#F3F7F7] flex-row p-4 rounded-[5px] gap-x-4 items-center'>
                        <PouchIcon />
                        <View className='gap-x-2 flex-row items-center'>
                            <Text className='text-xl font-SpaceGrotesk font-bold'>{sales}</Text>
                            <Text className='text-[#B2B2B2] font-medium font-SpaceGrotesk'>
                                sales this week
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className='mb-6 flex-row justify-between items-center'>
                        <Text className='text-base font-SpaceGrotesk font-medium'>Recent Transactions</Text>
                        <TouchableOpacity>
                            <Text className='text-brand font-SpaceGrotesk text-base font-medium'>View all</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        isLoading &&
                        <View>
                            <ActivityIndicator size="large" color="#B2B2B2" />
                        </View>
                    }
                    {
                        error &&
                        <Text>Error Fetching Data</Text>
                    }
                    {
                        <View>
                            {
                                mockData?.data.map((transaction: any) => {
                                    return <TransactionCardComponent key={transaction.id} product={transaction.product_service_expense} isFullyPaid={transaction.isFullyPaid} transactionAmount={transaction.transaction_amount} transactionType={transaction.transaction_type} customerName={transaction.customer_name} date={transaction.transaction_date} />
                                })
                            }
                        </View>
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default HomePresentation