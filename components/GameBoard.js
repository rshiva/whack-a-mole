import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Square  from './Square'
import {connect} from 'react-redux'

function GameBoard(props) {
  let time = 60
  const [timerLeft, setTimerLeft] = useState(time);

  useEffect(() => {
    if(!timerLeft) return
    const timerId = setInterval(() => {
      setTimerLeft(timerLeft - 1)
    }, 1000);
    return () => {
      clearInterval(timerId)
    }
  }, [timerLeft])



  return (
    <View style={styles.container}>
      <Text>Whack a Mole</Text>
      <Text>Time Left: {timerLeft}</Text>
      <Text>Score: {props.score}</Text>
       <View style={styles.game}>
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         <Square />
         
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 100,
  },
  game: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    paddingTop: 20,
  }
});

const mapStateToProps = (state) => {
  return{
    score: state.score
  }
}
export default connect(mapStateToProps)(GameBoard)
