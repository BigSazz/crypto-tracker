import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react';

import { AntDesign } from '@expo/vector-icons';

const CoinItem = ({ coin }) => {
    const { name, image, current_price, market_cap_rank, price_change_percentage_24h, symbol, market_cap } = coin;

    const normalizeMarketCap = (market_cap) => {
        if (market_cap > 1000000000000) {
            return (market_cap / 1000000000000).toFixed(2) + ' T';
        } else if (market_cap > 1000000000) {
            return (market_cap / 1000000000).toFixed(2) + ' B';
        } else if (market_cap > 1000000) {
            return (market_cap / 1000000).toFixed(2) + ' M';
        } else if (market_cap > 1000) {
            return (market_cap / 1000).toFixed(2) + ' K';
        } else {
            return market_cap;
        }
    }

    const percentageColor = price_change_percentage_24h > 0 ? '#16c784' : '#ea3943';

    return (
        <View style={styles.coinContainer}>
            <Image
                source={{ uri: image }}
                style={{ width: 30, height: 30, marginRight: 10, }}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.rank}>{market_cap_rank}</Text>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign
                        name={price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'}
                        size={12}
                        color={percentageColor}
                        style={{ alignSelf: 'center', marginRight: 5 }}
                    />
                    <Text style={{ color: percentageColor }}>{price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
            </View>

            <View style={{ marginLeft: 'auto', alignItems: "flex-end" }}>
                <Text style={styles.title}>{current_price}</Text>
                <Text style={{ color: '#fff', fontSize: 11 }}>MCap {normalizeMarketCap(market_cap)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    text: {
        color: '#fff',
        marginRight: 5,
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828',
        padding: 15,
    },
    rank: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 5,
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        borderRadius: 5,
    }
});

export default CoinItem