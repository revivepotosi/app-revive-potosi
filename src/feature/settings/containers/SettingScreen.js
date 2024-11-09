import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IndexPath, Select, SelectItem, Text } from '@ui-kitten/components';
import Style from '../../../style/Style';
import useLanguage from '../../../hooks/useLanguage';
import useGlobal from '../../../hooks/useGlobal';
import SETTING_SCREEN_STR from '../constants/SettingScreenStr';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import ROUTES from '../../../navigation/routes';

const SettingScreen = () => {
    const { languageCode, changeLanguage } = useLanguage();
    const { cleanOnBoarding } = useGlobal();
    const navigation = useNavigation();
    const [language, setLanguage] = useState(SETTING_SCREEN_STR.select.selectData[0]);
    const [languageIndex, setLanguageIndex] = useState(new IndexPath(0));

    useEffect(() => {
        const initIndexPath = new IndexPath(languageCode === 'ES' ? 0 : 1);
        setLanguageIndex(initIndexPath);
        setLanguage(SETTING_SCREEN_STR.select.selectData[initIndexPath.row]);
    }, [languageCode]);

    const onSelect = (index) => {
        changeLanguage(SETTING_SCREEN_STR.select.selectData[index.row].code);
    };
    const goOnBoarding = () => {
        cleanOnBoarding();
        navigation.navigate(ROUTES.onBoardingNavigation);
    };

    return (
        <Container barStyle="light-content" barBackgroundColor={Style.primary}>
            <View style={Style.p_4}>
                <Text style={[Style.body_large, Style.mb_3, Style.c_black]}>
                    {SETTING_SCREEN_STR.select.label[language.code]}
                </Text>
                <Select
                    style={Style.mb_4}
                    selectedIndex={languageIndex}
                    value={language.value}
                    onSelect={onSelect}
                    placeholder={SETTING_SCREEN_STR.select.placeholder[language.code]}
                    status="primary"
                >
                    <SelectItem title={SETTING_SCREEN_STR.select.selectData[0].value} />
                    <SelectItem title={SETTING_SCREEN_STR.select.selectData[1].value} />
                </Select>
                <Text style={[Style.body_large, Style.mb_3, Style.c_black]}>
                    {SETTING_SCREEN_STR.goOnBoarding[language.code]}
                </Text>
                <Button onPress={goOnBoarding}>
                    {SETTING_SCREEN_STR.buttonOnBoarding[language.code]}
                </Button>
            </View>
        </Container>
    );
};

export default SettingScreen;
