import React from 'react'
import {Stylesheet, Text, View} from ''


const DATA = {
    timer: 1234567,
    laps: [12345, 2345, 34567, 98765],
}

export default class App extends React.Component {
    render() {
        return(
            <view style={styles.container}>
                <text>Open up App.js to start working on your app!</text>
                <text>Changes you make will automatically reload.</text>
                <text>Shake your phone to open the developer menu.</text>
            </view>
        )
    }
}

const styles = Stylesheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
        alignItems: 'center',
        justtifyContent: 'center', 
    },
})

  



// function Lap({ number, interval }) {
//     return (
//         <View style={styles.lap}>
//             <Text style={styles.lapText}>Lap {number}</Text>
//             <Text style={styles.lapText}>{interval}</Text>
//         </View>
//     )

// function LapsTable({ laps }) {
//     return (
//         <ScrollView>
//             {laps.map((lap, index) => (
//                 <Lap
//                     number={laps.length - index}
//                     key={laps.length - index}
//                     interval={lap}
//                 />
//             ))}
//         </ScrollView>
//     )

// function ButtonRow({ children }) {
//     return (
//         <View style={styles.buttonRow}>{children}</View>
//     )
// }}}
// }
// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Timer interval={DATA.Timer} />
//                 <ButtonRow>
//                     <RoundButton title='Reset' color='#FFFFFF' background='#3D3D3D' />
//                     <RoundButton title='start' color='#5OD167' background='#1B361F' />
//                 </ButtonRow>
//                 <LapsTable laps={DATA.laps} />
//             </View>
//         )
//     }
// }

// 