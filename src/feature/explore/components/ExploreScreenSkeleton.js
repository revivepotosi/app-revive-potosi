import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Style from '../../../style/Style';

const ExploreScreenSkeleton = () => (
    <Container barStyle="light-content" barBackgroundColor={Style.primary}>
        <View style={Style.p_4}>
            <SkeletonPlaceholder borderRadius={20}>
                <SkeletonPlaceholder.Item width="100%" height={160} />
            </SkeletonPlaceholder>
        </View>
    </Container>
);

export default ExploreScreenSkeleton;
