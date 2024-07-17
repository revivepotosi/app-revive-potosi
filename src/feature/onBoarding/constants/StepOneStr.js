import GLOBAL_STR from '../../../constants/globalStr';

const STEP_ONE_STR = {
    title: {
        es: 'Bienvenido a\n' + GLOBAL_STR.appTitle,
        en: 'Welcome to\n',
    },
    select: {
        label: {
            es: 'Seleccione su idioma',
            en: 'Select your language',
        },
        selectData: [
            {
                value: 'Español',
                code: 'es',
            },
            {
                value: 'English',
                code: 'en',
            },
        ],
        placeholder: {
            es: 'Idioma',
            en: 'Language',
        },
    },
    button: {
        es: 'Continuar',
        en: 'Next',
    },
};

export default STEP_ONE_STR;
