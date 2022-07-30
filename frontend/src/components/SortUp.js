const SortUp = (props) => {
    for (let i = 0, endI = props.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (props[j].name > props[j + 1].name) {
                [props[j].name, props[j + 1].name] = [props[j + 1].name, props[j].name];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return props;
}

export default SortUp;