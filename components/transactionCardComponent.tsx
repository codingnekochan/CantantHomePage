import { View, Text, StyleSheet } from 'react-native'
import ReceiptIcon from '@/assets/images/invoice.svg'
import ArrowUp from '@/assets/images/arrow-up.svg'
import ArrowDown from '@/assets/images/arrow-down.svg'

const TransactionCardComponent = ({ product, customerName, date, transactionType, transactionAmount, isFullyPaid }: any) => {
    return (
        <View className='transaction-card border border-[#EBF1F299] flex-row justify-between mb-2 px-4 pt-2 pb-4' style={styles.custom}>
            <View className={transactionType === 'CREDIT' ? '' : 'justify-between'}>
                <View className='flex-row items-center gap-x-4 mb-4'>
                    {transactionType === 'CREDIT' ? <ArrowDown /> : <ArrowUp />}
                    <Text className='text-sm font-DMSans font-semibold'>{product}</Text>
                </View>
                {transactionType === 'CREDIT' &&
                    <View className='mb-2'>
                        <Text className='text-xs font-DMSans font-medium'>{customerName}</Text>
                    </View>
                }
                <View>
                    <Text className='text-[#b2b2b299] text-[10px] font-DMSans font-medium' style={styles.text}>{date}</Text>
                </View>
            </View>
            <View className='justify-between'>
                <Text className='text-[14px] font-DMSans font-semibold'>
                    {transactionType === 'CREDIT' ? '+' : '-'}
                    {transactionAmount}
                </Text>
                {transactionType === 'CREDIT' &&
                    <View className='bg-[#F3F7F7] flex-row items-center gap-x-2 justify-center px-2 py-[6px] rounded-[3px]'>
                        <ReceiptIcon />
                        <Text className='text-brand text-xs font-DMSans font-medium'>
                            {isFullyPaid ? 'Receipt' : 'Invoice'}
                        </Text>
                    </View>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    custom: {
        paddingBottom: 16,
        paddingTop: 8,
        borderColor: '#EBF1F299'

    },
    text: {
        color: '#B2B2B299',
        fontSize: 11,
        fontWeight: 500,
    }
})
export default TransactionCardComponent