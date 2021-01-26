import React, {useState, useEffect} from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {addScore} from './../redux/'
import {connect} from 'react-redux'

function Square(props) {

  const [moleActive, setMoleActive] = useState(false)

  const [isGameover, setIsGameover] = useState(false)

  const randomTime = Math.random() * 20000
  let timerId

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true)
      setTimeout(() => {setMoleActive(false)}, 800)
    }, randomTime);

    setTimeout(endGame,60 * 1000)
  }, [])

  const endGame = () =>{
    clearInterval(timerId)
    setIsGameover(true)
  }


  return (

    //conditional rendering
    <TouchableOpacity onPress={moleActive? props.addScore : null}>
      {/* <View> */}
      {
        moleActive? (
          <Image style={styles.mole} source={require('../assets/beaver.png')}></Image>
        ) : (
          <Image style={styles.square} source={require('../assets/grass.jpg')}></Image>
        )
      }
      {/* </View>  */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 square: {
    flex: 1,
    minHeight: 80,
    minWidth: 80,
    margin: 10,
    backgroundColor: 'green',
 },
 mole: {
    flex: 1,
    minHeight: 80,
    minWidth: 80,
    margin: 10,
    backgroundColor: '#6ea89c',
 }
})

const mapStateToProps = (state) => {
  return{
    score: state.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addScore: () => dispatch(addScore())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Square)
