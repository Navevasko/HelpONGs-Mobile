import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }

  render(){
    return (
      <DatePicker
        style={{width: 200, backgroundColor:"#FAFAFA", height:37}}
        date={this.state.date}
        mode="date"
        placeholder="selecione a data"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2300-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}

// https://github.com/xgfe/react-native-datepicker