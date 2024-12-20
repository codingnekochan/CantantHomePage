import React from 'react'
import {  
    KeyboardAvoidingView,
    ScrollView,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const CustomLayout = ({ children,bgColor}: any) => {
    return (
        <>
                <SafeAreaView
                className={`h-full ${bgColor ? bgColor : 'bg-white' }`}
                    edges={[ 'left', 'right']  }  >
                    <KeyboardAvoidingView
                        enabled
                    >
                        <ScrollView
                            keyboardShouldPersistTaps='handled'
                            contentContainerStyle={{
                                height: '100%',
                            }}
                        >
                            <ScrollView
                                keyboardShouldPersistTaps='handled'
                                contentContainerStyle={{
                                    flex: 1,
                                }}
                                className='h-[100%]'
                            >
                                <View
                                className={`w-full justify-center pb-[0px] mt-[8px] flex-1 ${bgColor ? bgColor : 'bg-white' }`}
                                >
                                    {children}
                                </View>
                            </ScrollView>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
        </>
    )
}

export default CustomLayout