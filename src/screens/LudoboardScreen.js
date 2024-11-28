import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Wrapper from '../components/Wrapper';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
import MenuIcon from '../assets/images/menu.png';
import Dice from '../components/Dice';
import {Colors} from '../constants/Colors';
import Pocket from '../components/Pocket';
import VerticalPath from '../components/path/VerticalPath';
import { Plot1Data, Plot2Data, Plot3Data, Plot4Data } from '../helpers/PlotData';
import HorizontalPath from '../components/path/HorizontalPath';
import FourTriangles from '../components/FourTriangles';
export class LudoboardScreen extends Component {
  render() {
    return (
      <Wrapper>
        <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}}>
          <Image source={MenuIcon} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.flexRow}>
            <Dice color={Colors.green} />
            <Dice color={Colors.yellow} rotate />
          </View>
          <View style={styles.ludoBoard}>
            <View style={styles.plotContainer}>
              <Pocket color={Colors.green} player={2} />
              <VerticalPath cells={Plot2Data} color={Colors.yellow}/>
              <Pocket color={Colors.yellow} player={3} />
            </View>

            <View style={styles.pathContainer}>
              <HorizontalPath cells={Plot1Data} color={Colors.green}/>
              <FourTriangles/>
              <HorizontalPath cells={Plot3Data} color={Colors.blue}/>
            </View>
            <View style={styles.plotContainer}>
              <Pocket color={Colors.red} player={1} />
              <VerticalPath cells={Plot4Data} color={Colors.red}/>
              <Pocket color={Colors.blue} player={4} />
            </View>
          </View>
          <View style={styles.flexRow}>
            <Dice color={Colors.red} />
            <Dice color={Colors.blue} rotate />
          </View>
        </View>
      </Wrapper>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.5,
    width: deviceWidth,
  },
  flexRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  ludoBoard: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  plotContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  pathContainer:{
    flexDirection:'row',
    width:'100%',
    height:'20%',
    justifyContent:'space-between',
    backgroundColor:'#1E5162',
  }
});
export default LudoboardScreen;
