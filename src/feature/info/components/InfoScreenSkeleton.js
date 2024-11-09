import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Style from '../../../style/Style';

const InfoScreenSkeleton = () => (
    <Container barStyle="light-content" barBackgroundColor={Style.primary}>
        <View style={Style.p_4}>
            <View style={Style.mb_4}>
                <SkeletonPlaceholder borderRadius={10}>
                    <SkeletonPlaceholder.Item width={200} height={16} />
                </SkeletonPlaceholder>
            </View>
            <SkeletonPlaceholder borderRadius={20}>
                <SkeletonPlaceholder.Item width="100%" height={160} />
            </SkeletonPlaceholder>
        </View>
    </Container>
);

export default InfoScreenSkeleton;
