import { View, Text, TouchableOpacity } from 'react-native'
import ArrowUp from '@/assets/images/arrow-up.svg'
import ArrowDown from '@/assets/images/arrow-down.svg'
import NewProductIcon from '@/assets/images/newProduct.svg'
import RestockIcon from '@/assets/images/restock.svg'
import CancelIcon from '@/assets/images/cancel.svg'
const NewTransactionComponent = ({setIsVisibleTransaction} : any) => {
    return (
        <View className='relative pt-2'>
            <TouchableOpacity
            onPress={()=>setIsVisibleTransaction(false)}
             className='absolute top-0 left-0'>
                <CancelIcon width={24} />
            </TouchableOpacity>
            <View className='justify-center items-center'>
                <Text className='text-base font-SpaceGrotesk font-medium mb-14'>New Transaction</Text>
            </View>
            <View className='flex-row justify-between  px-6 mb-[110px]'>
                <View className=' justify-between items-center gap-y-8'>
                    <TouchableOpacity className='items-center'>
                        <View className='p-4 mb-2 bg-[#0898A01A] rounded-[2px]'>
                            <ArrowDown />
                        </View>
                        <Text className='font-SpaceGrotesk text-sm font-medium text-center'>
                            Add Money In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='items-center'>
                        <View className='p-4 mb-2 bg-[#E8390E2B] rounded-[2px]'>
                            <ArrowUp />
                        </View>
                        <Text className='font-SpaceGrotesk text-sm font-medium text-center'>
                            Add Money Out
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className=' justify-between items-center gap-y-8'>
                    <TouchableOpacity className='items-center'>
                        <View className='p-4 mb-2 bg-[#0898A01A] rounded-[2px]'>
                            <RestockIcon />
                        </View>
                        <Text className='font-SpaceGrotesk text-sm font-medium text-center'>
                            Restock
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='items-center'>
                        <View className='p-4 mb-2 bg-[#0898A01A] rounded-[2px]'>
                            <NewProductIcon />
                        </View>
                        <Text className='font-SpaceGrotesk text-sm font-medium text-center'>
                            Add new product
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NewTransactionComponent