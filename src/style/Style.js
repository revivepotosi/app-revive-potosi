import { Dimensions } from "react-native";

const global_colors = {
    background: '#F4F4F4',
    primary: '#0A014F',
    primary_transparent: 'rgba(10, 1, 79, 0.7)',
    secondary: '#F99D03',
    accent: '#ADF7B6',
    accent_2: '#B5E2FA',
    black: '#000000',
    white: '#FFFFFF',
    gray_light: '#CCCCCC',
};

const colors = {
    c_background: { color: global_colors.background },
    c_primary: { color: global_colors.primary },
    c_secondary: { color: global_colors.secondary },
    c_accent: { color: global_colors.accent },
    c_accent_2: { color: global_colors.accent_2 },
    c_black: { color: global_colors.black },
    c_white: { color: global_colors.white },
    c_gray_light: { color: global_colors.gray_light },
};

const width = {
    w_window: { width: Dimensions.get('window').width },
    w_full: { width: '100%' },
}

const height = {
    h_full: { height: '100%' },
}

const spacerSize = {
    one: 4,
    two: 8,
    three: 12,
    four: 16,
    five: 24,
    six: 32,
    seven: 40,
};

const margin = {
    m_1: { margin: spacerSize.one},
    m_2: { margin: spacerSize.two},
    m_3: { margin: spacerSize.three},
    m_4: { margin: spacerSize.four},
    m_5: { margin: spacerSize.five},
    m_6: { margin: spacerSize.six},
    m_7: { margin: spacerSize.seven},
    mt_1: { marginTop: spacerSize.one},
    mt_2: { marginTop: spacerSize.two},
    mt_3: { marginTop: spacerSize.three},
    mt_4: { marginTop: spacerSize.four},
    mt_5: { marginTop: spacerSize.five},
    mt_6: { marginTop: spacerSize.six},
    mt_7: { marginTop: spacerSize.seven},
    mb_1: { marginBottom: spacerSize.one},
    mb_2: { marginBottom: spacerSize.two},
    mb_3: { marginBottom: spacerSize.three},
    mb_4: { marginBottom: spacerSize.four},
    mb_5: { marginBottom: spacerSize.five},
    mb_6: { marginBottom: spacerSize.six},
    mb_7: { marginBottom: spacerSize.seven},
    ml_1: { marginLeft: spacerSize.one},
    ml_2: { marginLeft: spacerSize.two},
    ml_3: { marginLeft: spacerSize.three},
    ml_4: { marginLeft: spacerSize.four},
    ml_5: { marginLeft: spacerSize.five},
    ml_6: { marginLeft: spacerSize.six},
    ml_7: { marginLeft: spacerSize.seven},
    mr_1: { marginRight: spacerSize.one},
    mr_2: { marginRight: spacerSize.two},
    mr_3: { marginRight: spacerSize.three},
    mr_4: { marginRight: spacerSize.four},
    mr_5: { marginRight: spacerSize.five},
    mr_6: { marginRight: spacerSize.six},
    mr_7: { marginRight: spacerSize.seven},
    mv_1: { marginVertical: spacerSize.one},
    mv_2: { marginVertical: spacerSize.two},
    mv_3: { marginVertical: spacerSize.three},
    mv_4: { marginVertical: spacerSize.four},
    mv_5: { marginVertical: spacerSize.five},
    mv_6: { marginVertical: spacerSize.six},
    mv_7: { marginVertical: spacerSize.seven},
    mh_1: { marginHorizontal: spacerSize.one},
    mh_2: { marginHorizontal: spacerSize.two},
    mh_3: { marginHorizontal: spacerSize.three},
    mh_4: { marginHorizontal: spacerSize.four},
    mh_5: { marginHorizontal: spacerSize.five},
    mh_6: { marginHorizontal: spacerSize.six},
    mh_7: { marginHorizontal: spacerSize.seven},
};

const padding = {
    p_1: { padding: spacerSize.one},
    p_2: { padding: spacerSize.two},
    p_3: { padding: spacerSize.three},
    p_4: { padding: spacerSize.four},
    p_5: { padding: spacerSize.five},
    p_6: { padding: spacerSize.six},
    p_7: { padding: spacerSize.seven},
    pt_1: { paddingTop: spacerSize.one},
    pt_2: { paddingTop: spacerSize.two},
    pt_3: { paddingTop: spacerSize.three},
    pt_4: { paddingTop: spacerSize.four},
    pt_5: { paddingTop: spacerSize.five},
    pt_6: { paddingTop: spacerSize.six},
    pt_7: { paddingTop: spacerSize.seven},
    pb_1: { paddingBottom: spacerSize.one},
    pb_2: { paddingBottom: spacerSize.two},
    pb_3: { paddingBottom: spacerSize.three},
    pb_4: { paddingBottom: spacerSize.four},
    pb_5: { paddingBottom: spacerSize.five},
    pb_6: { paddingBottom: spacerSize.six},
    pb_7: { paddingBottom: spacerSize.seven},
    pl_1: { paddingLeft: spacerSize.one},
    pl_2: { paddingLeft: spacerSize.two},
    pl_3: { paddingLeft: spacerSize.three},
    pl_4: { paddingLeft: spacerSize.four},
    pl_5: { paddingLeft: spacerSize.five},
    pl_6: { paddingLeft: spacerSize.six},
    pl_7: { paddingLeft: spacerSize.seven},
    pr_1: { paddingRight: spacerSize.one},
    pr_2: { paddingRight: spacerSize.two},
    pr_3: { paddingRight: spacerSize.three},
    pr_4: { paddingRight: spacerSize.four},
    pr_5: { paddingRight: spacerSize.five},
    pr_6: { paddingRight: spacerSize.six},
    pr_7: { paddingRight: spacerSize.seven},
    pv_1: { paddingVertical: spacerSize.one},
    pv_2: { paddingVertical: spacerSize.two},
    pv_3: { paddingVertical: spacerSize.three},
    pv_4: { paddingVertical: spacerSize.four},
    pv_5: { paddingVertical: spacerSize.five},
    pv_6: { paddingVertical: spacerSize.six},
    pv_7: { paddingVertical: spacerSize.seven},
    ph_1: { paddingHorizontal: spacerSize.one},
    ph_2: { paddingHorizontal: spacerSize.two},
    ph_3: { paddingHorizontal: spacerSize.three},
    ph_4: { paddingHorizontal: spacerSize.four},
    ph_5: { paddingHorizontal: spacerSize.five},
    ph_6: { paddingHorizontal: spacerSize.six},
    ph_7: { paddingHorizontal: spacerSize.seven},
};

const flex = {
    flex_i: { flex: 1 },
    flex_0: { flex: 0 },
    flex_grow: { flexGrow: 1 },
    flex_grow_0: { flexGrow: 0 },
    flex_col: { flexDirection: 'column' },
    flex_row: { flexDirection: 'row' },
    flex_col_reverse: { flexDirection: 'column-reverse' },
    flex_row_reverse: { flexDirection: 'row-reverse' },
};

const justifyContent = {
    jc_c: { justifyContent: 'center' },
    jc_fs: { justifyContent: 'flex-start' },
    jc_fe: { justifyContent: 'flex-end' },
    jc_sb: { justifyContent: 'space-between' },
    jc_sa: { justifyContent: 'space-around' },
    jc_se: { justifyContet: 'space-evenly' },
};

const alignItems = {
    ai_c: { alignItems: 'center' },
    ai_fs: { alignItems: 'flex-start' },
    ai_fe: { alignItems: 'flex-end' },
    ai_s: { alignItems: 'stretch' },
    ai_b: { alignItems: 'baseline' },
};

const alignSelf = {
    as_c: { alignSelf: 'center' },
    as_fs: { alignSelf: 'flex-start' },
    as_fe: { alignSelf: 'flex-end' },
    as_s: { alignSelf: 'stretch' },
    as_b: { alignSelf: 'baseline' },
};

const background = {
    bg_background: { backgroundColor: global_colors.background },
    bg_primary: { backgroundColor: global_colors.primary },
    bg_primary_transparent: { backgroundColor: global_colors.primary_transparent },
    bg_secondary: { backgroundColor: global_colors.secondary },
    bg_accent: { backgroundColor: global_colors.accent },
    bg_accent_2: { backgroundColor: global_colors.accent_2 },
    bg_black: { backgroundColor: global_colors.black },
    bg_white: { backgroundColor: global_colors.white },
    bg_gray_light: { backgroundColor: global_colors.gray_light },
};

const text = {
    ta_c: { textAlign: 'center' },
};

const textCustom = {
    title_large: { fontSize: 22, letterSpacing: 0, lineHeight: 28 },
    title_medium: { fontSize: 16, fontWeight: 'bold', letterSpacing: 0.15, lineHeight: 24 },
    title_small: { fontSize: 14, fontWeight: 'bold', letterSpacing: 0.1, lineHeight: 20 },
    label_large: { fontSize: 14, fontWeight: 'bold', letterSpacing: 0.1, lineHeight: 20 },
    label_medium: { fontSize: 12, fontWeight: 'bold', letterSpacing: 0.5, lineHeight: 16 },
    label_small: { fontSize: 11, fontWeight: 'bold', letterSpacing: 0.5, lineHeight: 16 },
    body_large: { fontSize: 16, letterSpacing: 0.5, lineHeight: 24 },
    body_medium: { fontSize: 14, letterSpacing: 0.25, lineHeight: 20 },
    body_small: { fontSize: 12, letterSpacing: 0.4, lineHeight: 16 },
    headline_large: { fontSize: 32, letterSpacing: 0, lineHeight: 40 },
    headline_medium: { fontSize: 28, letterSpacing: 0, lineHeight: 36 },
    headline_small: { fontSize: 24, letterSpacing: 0, lineHeight: 32 },
};

const border = {
    br_20: { borderRadius: 20 },
}

const defaultShadowStyle = {
    shadowColor: global_colors.primary,
    shadowOpacity: 0.1,
    shadowRadius: 4,
};
const shadow = {
    shadow: {
        ...defaultShadowStyle,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    shadow_top: {
        ...defaultShadowStyle,
        shadowOffset: { width: 0, height: -4 },
        elevation: 10,
    },
    shadow_disabled: {
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1,
    },
    shadow_header: {
        ...defaultShadowStyle,
        shadowOffset: { width: 0, height: 4 },
        elevation: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        borderBottomColor: '#fff',
    },
    shadow_none: {
        elevation: 0,
        shadowRadius: 0,
        shadowOpacity: 0,
    },
};
const opacity = {
    o_0: { opacity: 0 },
    o_10: { opacity: 0.1 },
    o_20: { opacity: 0.2 },
    o_30: { opacity: 0.3 },
    o_40: { opacity: 0.4 },
    o_50: { opacity: 0.5 },
    o_60: { opacity: 0.6 },
    o_70: { opacity: 0.7 },
    o_80: { opacity: 0.8 },
    o_90: { opacity: 0.9 },
    o_1: { opacity: 1 },
};


export default {
    ...background,
    ...flex,
    ...justifyContent,
    ...alignItems,
    ...alignSelf,
    ...textCustom,
    ...colors,
    ...margin,
    ...padding,
    ...text,
    ...global_colors,
    ...width,
    ...height,
    ...border,
    ...shadow,
    ...opacity,
};
