import React, { useContext, useMemo } from "react";
import { Text } from '@ui-kitten/components';
import { Context } from "../../Reducer/context";

const GetText = (name, value) => {
    return (<>{value ? (<Text category='h5'>{name}: {value}</Text>) : null}</>)
}

const RightContent = () => {
    const { state } = useContext(Context);

    return useMemo(() => {
        return (
            <>
                {GetText('Symbol', state.quotesTickInfo.symbol)}
                {GetText('Description', state.quotesTickInfo.description)}
                {GetText('Digits', state.quotesTickInfo.digits)}
                {GetText('Ask', state.quotesTickInfo.ask)}
                {GetText('Bid', state.quotesTickInfo.bid)}
                {GetText('Change', state.quotesTickInfo.change)}
                {GetText('Change 24h', state.quotesTickInfo.change24h)}
            </>
        )
    }, [state.quotesTickInfo])
};

export default RightContent;