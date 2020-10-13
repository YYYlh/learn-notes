import React, { useEffect, Fragment, useState } from 'react'

export default function() {
    let [value, setValue] = useState(0)
    useEffect(() => {
        console.log('我在页面发生改变时都会渲染哦');
    })
    useEffect(() => {
        console.log('组件被渲染了');
        return () => {
            console.log('组件被注销了')
        }
    }, [])
    useEffect(() => {
        console.log('我只会执行一次')
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            setValue(value++)
            console.log('value值发生了改变', value);
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [value])
    return (
        <Fragment>
            <h2>useEffect</h2>
            <li>1.第一个参数是一个函数，执行useEffect时会执行函数里面的代码</li>
            <li>2.第二个参数如果没有传值的话，组件每次刷新、渲染都会执行一遍</li>
            <li>3.第二个参数应该传入一个数组，里面存放相关依赖（例如 state）如果依赖发生改变，才会执行</li>
            <li>4.第二个数组是一个空数组的话，则只会在组件第一次被渲染时执行</li>
            <li>5.如果第一个参数中return了一个函数，则会在组件被注销时执行被return函数</li>
        </Fragment>
    )
}