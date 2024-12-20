import CustomLayout from '@/components/CustomLayout'
import { useState, useEffect } from 'react'
import HomePresentation from '@/components/homePresentation'
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import CustomModal from '@/components/CustomModal';
import NewTransactionComponent from '@/components/newTransactionComponent';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigation } from 'expo-router';
const fetchData = async (): Promise<any> => {
  const response = await axios.get('https://1c91009d-365e-4854-87c3-7e3bbdeaddf8.mock.pstmn.io'); //mock api generated using postman
  return response.data;
};


const Home = () => {
  const navigation = useNavigation()
  // handle showing and hiding balance
  const [isOpen, setIsOpen] = useState(false)
  const height = useSharedValue(0);
  // handle opening and closing 'new Transaction' modal
  const [isVisibleTranasaction, setIsVisibleTransaction] = useState(false)
  // showing and hiding drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  // handle data fetch
  const { data: mockData, error, isLoading, status } = useQuery({
    queryKey: ['fetchData'],
    queryFn: fetchData,
  })

  useEffect(() => {
    height.value = withTiming(isOpen ? 50 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }, [isOpen]);
  // animate hiding and showing balance
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const sales = mockData?.data.filter((data: any) => {
      return data.transaction_type === 'CREDIT'
    }).length
    console.log(sales)
  const closeTransactionModal = () => {
    setIsVisibleTransaction(false)
  }
  const handleOpenBalance = () => {
    if (isOpen) {
      setIsOpen(false)
    }
    else (setIsOpen(true))
    console.log(isOpen)
  }
  const handleOpenDrawer = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false)
    }
    else (setIsDrawerOpen(true))
  }
  const dataProps = {
    isOpen,
    handleOpenBalance,
    height,
    animatedStyle,
    setIsVisibleTransaction,
    closeTransactionModal,
    mockData,
    error,
    isLoading,
    navigation,
    isDrawerOpen,
    handleOpenDrawer,
    sales
  }
  return (
    <CustomLayout bgColor='bg-brand'>
      <HomePresentation {...dataProps} />
      {/* <DrawerNavigation /> */}

      <CustomModal
        isVisible={isVisibleTranasaction}
        closeModal={closeTransactionModal}
      >
        <NewTransactionComponent {...dataProps} />
      </CustomModal>
    </CustomLayout>
  )
}

export default Home