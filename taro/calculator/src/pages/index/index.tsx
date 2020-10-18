import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function () {
  
  let [digit ,setDigit] = useState('0')
  let [stack, updateStack] = useState([''])
  let [result, updateResult] = useState('0')
  let [operatorHover, updateOperatorHover] = useState(false)
  
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
  const priority = {
    '÷': 2,
    '×': 2,
    '-': 1,
    '+': 1
  }
  const btnClick = (item) => {
    types[item.type](item.value)
  }
  const generateDigit = (value) => {
    if (digit === '0' || operatorHover) {
      updateOperatorHover(false)
      updateResult('0')
      setDigit(value)
    } else {
      setDigit(digit + value)
    }
  }
  const setOperator = (value) => {
    updateOperatorHover(true)
    if (stack.length > 0) {
      if (priority[value] > priority[stack[1]]) {
        let tempStack = [...stack, digit, value]
        updateStack(tempStack)
        return
      } else {
        getResult()
      } 
    }
    if (updateStack[1] !== value) {
      updateStack([digit, value])
    }
  }
  const compute = (l: number, o: string, r: number): number => {
    let result: number = 0
    switch (o) {
      case '÷':
        result = l / r
        break
      case '×':
        result = l * r
        break
      case '-':
        result = l - r
        break
      case '+':
        result = l + r
        break
    }
    return result
  }
  const getResult = (value?) => {
    if (value) {
      updateOperatorHover(true)
    }
    if (!stack.length) return
    let temp: string
    const l: number = Number(result) || Number(stack[0])
    const o: string = stack[1]
    const r: number = Number(digit)
    if (stack.length === 2) {
      temp = String(compute(l, o, r))
    } else {
      temp = String(compute(l, o, compute(Number(stack[2]), stack[3], r)))
    }
    updateResult(temp)
    setDigit(temp)
    updateStack([])
  }
  const types = {
    'number': generateDigit,
    'zero': generateDigit,
    'operator': setOperator,
    'equal': getResult,
    point(value) {
      if (digit.includes(value)) {
        return
      }
      setDigit(digit += value)
    },
    reset() {
      setDigit('0')
      updateStack([])
      updateOperatorHover(false)
      updateResult('0')
    },
    symbol(value) {
      if (value === '%') {
        setDigit(String(Number(digit) / 100))
      } else {
        setDigit(String(-Number(digit)))
      }
    }
  }

  const keyboard = buttons.map((row, index) => {
    return <View key={index}>
      {
        row.map(item => {
        return <span
            className={className[item.type]}
            key={item.value}
            onClick={btnClick.bind(this, item)}
          >
            <span>{item.value}</span>
          </span>
        })
      }
    </View>
  })
  return (
    <View className="content">
      <View className="result-content">
        <Text>{digit}</Text>
      </View>
      <View>
        {keyboard}
      </View>
    </View>
  )
}
