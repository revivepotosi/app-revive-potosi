import GLOBAL_STR from '../../../constants/globalStr';

const STEP_ONE_STR = {
    title: {
        ES: 'Bienvenido a\n' + GLOBAL_STR.appTitle,
        EN: 'Welcome to\n',
    },
    select: {
        label: {
            ES: 'Seleccione su idioma',
            EN: 'Select your language',
        },
        selectData: [
            {
                value: 'Español',
                code: 'ES',
            },
            {
                value: 'English',
                code: 'EN',
            },
        ],
        placeholder: {
            ES: 'Idioma',
            EN: 'Language',
        },
    },
    button: {
        ES: 'Continuar',
        EN: 'Next',
    },
};

export default STEP_ONE_STR;
