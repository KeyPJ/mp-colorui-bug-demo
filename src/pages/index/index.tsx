import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { ClFloatButton } from "mp-colorui"
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <ClFloatButton
          size='large'
          bgColor='red'
          closeWithShadow
          direction='vertical'
          move
          actionList={[
            {
              icon: 'lightforbid'
            },
            {
              icon: 'friendfamous'
            }
          ]}
        />
      </View>
    )
  }
}
