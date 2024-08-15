import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function CustomButton() {
  return (
    <TouchableOpacity
    className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center`}
    ></TouchableOpacity>
  )
}