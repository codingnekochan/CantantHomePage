import { View, Image } from 'react-native'
import CustomLayout from '@/components/CustomLayout'
const Reports = () => {
  return (
    <CustomLayout>
      <View className='w-full'>
        <Image source={require('@/assets/images/banner.png')} style={{ objectFit: 'contain', width: 400 }} />
      </View>
    </CustomLayout>
  )
}

export default Reports