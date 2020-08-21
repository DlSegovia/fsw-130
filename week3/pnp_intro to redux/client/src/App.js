import React from 'react'
// import { createStore } from 'redux'
import Timer from './timer'


class Application extends React.Component {
    render() {
      return (
        <div>
           <Timer updateInterval={0} />
        </div>
      );
    }
  }
  
 
  
  


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




export default Application