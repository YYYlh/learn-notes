import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function () {
  const buttons = [
    [{ value: 'C', type: 'reset' }, { value: '+/-', type: 'symbol' }, { value: '%', type: 'symbol' }, { value: '÷', type: 'operator' }],
    [{ value: '7', type: 'number' }, { value: '8', type: 'number' }, { value: '9', type: 'number' }, { value: '×', type: 'operator' }],
    [{ value: '4', type: 'number' }, { value: '5', type: 'number' }, { value: '6', type: 'number' }, { value: '-', type: 'operator' }],
    [{ value: '1', type: 'number' }, { value: '2', type: 'number' }, { value: '3', type: 'number' }, { value: '+', type: 'operator' }],
    [{ value: '0', type: 'zero' }, { value: '.', type: 'point' }, { value: '=', type: 'equal' }]
  ]
  const className = {
    reset: 'style1 item',
    symbol: 'style1 item',
    number: 'style2 item',
    operator: 'style3 item',
    zero: 'style2 zero',
    point: 'style2 item',
    equal: 'style3 item',
  }
  const keyboard = buttons.map((row, index) => {
    return <View key={index}>
      {
        row.map(item => {
          return <span className={className[item.type]} key={item.value}>{item.value}</span>
        })
      }
    </View>
  })
  return (
    <View className="content">
      <View>
        <Text>0</Text>
      </View>
      <View>
        {keyboard}
      </View>
    </View>
  )
}
