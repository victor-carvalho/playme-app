import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class VolumeSlider extends Component {
    state = {
        value: 0
    }

    onChangeValue = value => {
        this.setState({ value });
    }

    onVolumeOff = () => {
        this.setState({ value: 0 });
    }
    
    onVolumeFull = () => {
        this.setState({ value: 100 });
    }

    onTap = e => { 
        this.slider.measure((fx, fy, width, height, px, py) => {
            let relative = (e.nativeEvent.pageX - px) / width;
            this.onChangeValue(Math.floor(relative * 100)); 
        }) 
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onVolumeOff}>
                    <Icon name="volume-low" size={30}/>
                </TouchableWithoutFeedback>
                <View 
                    collapsable={false}
                    style={styles.slider} 
                    ref={component => this.slider = component} >
                    <TouchableWithoutFeedback onPressIn={this.onTap}>
                        <Slider
                            value={this.state.value}
                            onValueChange={this.onChangeValue}
                            thumbStyle={styles.thumb}
                            mininumValue={0}
                            maximumValue={100} />
                    </TouchableWithoutFeedback>
                </View>
                <TouchableWithoutFeedback onPress={this.onVolumeFull}>
                    <Icon name="volume-high" size={30}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    slider: {
        flex: 1,
        marginRight: 5
    },
    thumb: {
        backgroundColor: '#FF4064'
    }
});