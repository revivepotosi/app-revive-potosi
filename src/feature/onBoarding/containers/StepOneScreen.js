import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IndexPath, Text, Select, SelectItem } from '@ui-kitten/components';
import Style from '../../../style/Style';
import STEP_ONE_STR from '../constants/StepOneStr';
import ROUTES from '../navigation/routes';
import useLanguage from '../../../hooks/useLanguage';
import Container from '../../../components/Container';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import PotosiLogo from '../../../components/PotosiLogo';

const StepOneScreen = () => {
    const [language, setLanguage] = useState(STEP_ONE_STR.select.selectData[0]);
    const { changeLanguage } = useLanguage();
    const [languageIndex, setLanguageIndex] = useState(new IndexPath(0));
    const navigation = useNavigation();
    const onSelect = (index) => {
        setLanguageIndex(index);
        setLanguage(STEP_ONE_STR.select.selectData[index.row]);
    };
    const onContinue = () => {
        changeLanguage(language.code);
        navigation.navigate(ROUTES.stepTwo);
    };

    return (
        <Container>
            <View style={[Style.flex_i, Style.ph_4, Style.pt_7]}>
                <Text style={[Style.headline_large, Style.c_primary, Style.ta_c, Style.mb_6]}>
                    {STEP_ONE_STR.title[language.code]}
                </Text>
                <Image
                    style={[Style.mb_6, Style.as_c]}
                    source={require('../../../../assets/imagen_onboarding_uno.png')}
                />
                <PotosiLogo style={Style.mb_6} />
                <Text style={[Style.body_large, Style.mb_3, Style.c_black]}>
                    {STEP_ONE_STR.select.label[language.code]}
                </Text>
                <Select
                    selectedIndex={languageIndex}
                    value={language.value}
                    onSelect={onSelect}
                    placeholder={STEP_ONE_STR.select.placeholder[language.code]}
                    status="primary"
                >
                    <SelectItem title={STEP_ONE_STR.select.selectData[0].value} />
                    <SelectItem title={STEP_ONE_STR.select.selectData[1].value} />
                </Select>
            </View>
            <Footer>
                <Button
                    onPress={onContinue}
                >
                    {STEP_ONE_STR.button[language.code]}
                </Button>
            </Footer>
        </Container>
    );
};

export default StepOneScreen;
