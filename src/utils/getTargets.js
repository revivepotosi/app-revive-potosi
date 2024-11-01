const getTargets = (experiences) => {
    const targets = experiences.reduce((res, el) => {
        return {
            ...res,
            [el.id]: {
                source: { uri: el.activator.url },
                orientation: 'Up',
                physicalWidth: 0.15,
            },
        };
    }, {});
    return targets;
};

export default getTargets;
