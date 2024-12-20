import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = (props: any) => {
    return (
        <View>
            <Modal
                // isVisible={true}
                onModalHide={props.onModalHide}
                onBackdropPress={props.closeModal}
                animationIn='slideInUp'
                animationInTiming={300}
                animationOut='slideOutDown'
                animationOutTiming={300}
                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}
                testID={'modal'}
                isVisible={props.isVisible}
                onSwipeComplete={props.closeModal}
                swipeDirection={['down']}
                useNativeDriverForBackdrop
                propagateSwipe={true}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
            >
                <View
                    className={`pt-[16px] pb-[40px] ${props.background ? props.background : 'bg-white'
                        } rounded-t-[15px] max-h-[98%] ${props.px ? props.px : 'px-[24px]'}`} 
                >
                    {props.hideBar ? null : (
                        <View className='flex-row justify-center'>
                            <View className='bg-grayCustom-200 h-[6px] w-[55.656px] rounded-[4px]' />
                        </View>
                    )}
                    <View>{props.children}</View>
                </View>
            </Modal>
        </View>
    );
};

export default CustomModal;