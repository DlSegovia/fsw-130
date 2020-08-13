import React, {Component} from 'react'

import {styleSheet, Text, View, ScrollView }  from 'react-native'
import moment from 'moment'

const DATA = {
    timer: 1234567,
    laps: [ 12345, 2345, 34567, 98765],
}

function Timer ({ interval }) {
    const duration = moment.duration(interval)
    const centiseconds = Math.floor(duration.milliseconds() / 10)
    return (
        <Text style={styles.time}>
            {duration.minutes()}:{duration.seconds()},{centiseconds}
        </Text>
    )
}
function RoundButton({ title, color, background }) {
    return (
        <View style={[ styles.button, { backgroundColor: background }]}>
            <view style={styles.buttonBorder}>
            <Text style={{color}}>{title}</Text>
            </view>
        </View>
    )
}

function Lap({ number, interval }) {
    return (
        <View style={styles.lap}>
            <Text style={styles.lapText}>Lap {number}</Text>
            <Text style={styles.lapText}>{interval}</Text>
        </View>
    )
}

function LapsTable({ laps }) {
    return (
        <ScrollView>
           {laps.map((lap, index) => (
               <Lap 
                number={laps.length - index} 
                key={laps.length - index}
                interval={lap} 
            />
           ))} 
        </ScrollView>
    )
}

function ButtonRow({ children }) {
    return (
        <View style={styles.buttonRow}>{children}</View>
    )
}

export default class App extends Component {
    render() {
        return(
<View style={styles.container}>
    <Timer interval={DATA.Timer}/>
    <ButtonRow>
    <RoundButton title='Reset' color='#FFFFFF' background='#3D3D3D'/>
    <RoundButton title='start' color='#5OD167' background='#1B361F'/>
    </ButtonRow>
    <LapsTable laps={DATA.laps} />
</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ODODOD',
        alignItems: 'center',
        paddingTop: 130,
        paddingHorizontal: 20,
    },
    timer: {
        color: '#FFFFFF',
        fontSize: 76,
        fontWeight: '200'
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 18,
    },
    buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
buttonRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
},
lapText: {
    color:'FFFFFF',
    fontSize: 18,
}
}) 

