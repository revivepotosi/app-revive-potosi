import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import BadgeIcon from '../../../../components/BadgeIcon';
import { Text } from '@ui-kitten/components';
import Button from '../../../../components/Button';
import HOME_SECTION_STR from './homeSectionStr';
import GLOBAL_STR from '../../../../constants/globalStr';
import { isCenter, keyExtractor } from './utils';
import useLanguage from '../../../../hooks/useLanguage';
import HOME_SCREEN_STR from '../../constants/HomeScreenStr';
import SelectorCard from '../../../../components/SelectorCard';
import Style from '../../../../style/Style';

const HomeSection = ({ loading, data, type, onMorePress, onItemPress }) => {
    const { languageCode } = useLanguage();

    if (loading) {
        return (
            <>
                <View
                    style={[
                        Style.flex_row,
                        Style.jc_sb,
                        Style.mb_3,
                        Style.ph_4,
                    ]}>
                    <View style={[Style.flex_row, Style.ai_c]}>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item
                                width={30}
                                height={30}
                                borderRadius={50}
                            />
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder borderRadius={10}>
                            <SkeletonPlaceholder.Item
                                width={160}
                                height={14}
                                style={Style.ml_2}
                            />
                        </SkeletonPlaceholder>
                    </View>
                    <SkeletonPlaceholder borderRadius={50}>
                        <SkeletonPlaceholder.Item width={100} height={30} />
                    </SkeletonPlaceholder>
                </View>
                <FlatList
                    horizontal
                    data={HOME_SECTION_STR.loadingData}
                    renderItem={() => <SelectorCard loading />}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={[Style.ph_4, Style.pb_4]}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                />
            </>
        );
    }

    const renderItem = ({ item }) => {
        if (isCenter(type)) {
            return (
                <SelectorCard
                    title={item?.text[languageCode].name}
                    subtitle={item?.category.text[languageCode].name}
                    image={item.image.url}
                    onPress={onItemPress(item.id)}
                />
            );
        }
        return (
            <SelectorCard
                title={item?.text[languageCode].name}
                image={item.image.url}
                onPress={onItemPress(item.id)}
            />
        );
    };
    const getIcon = () =>
        isCenter(type)
            ? HOME_SECTION_STR.centerIcon
            : HOME_SECTION_STR.categoryIcon;

    const getTitle = () =>
        isCenter(type)
            ? HOME_SCREEN_STR.centers[languageCode]
            : HOME_SCREEN_STR.category[languageCode];

    return (
        <>
            <View style={[Style.flex_row, Style.jc_sb, Style.mb_3, Style.ph_4]}>
                <View style={[Style.flex_row, Style.ai_c]}>
                    <BadgeIcon
                        iconName={getIcon()}
                        containerSize={30}
                        iconSize={18}
                    />
                    <Text
                        style={[Style.ml_2, Style.title_medium, Style.c_black]}>
                        {getTitle()}
                    </Text>
                </View>
                <Button appearance="outline" size="small" onPress={onMorePress}>
                    {HOME_SECTION_STR.more[languageCode]}
                </Button>
            </View>
            <FlatList
                horizontal
                data={data.slice(0, HOME_SECTION_STR.maxData)}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={[Style.ph_4, Style.pb_4]}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            />
        </>
    );
};

HomeSection.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array,
    type: PropTypes.oneOf([GLOBAL_STR.center, GLOBAL_STR.category]),
    onMorePress: PropTypes.func,
    onItemPress: PropTypes.func,
};

HomeSection.defaultProps = {
    loading: false,
    data: [],
    type: GLOBAL_STR.center,
    onMorePress: () => null,
    onItemPress: () => null,
};

export default HomeSection;
