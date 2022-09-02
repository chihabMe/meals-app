import { Text, View } from 'react-native'
import React, { Component, ReactNode, useContext } from 'react'
import {Button as PaperButton} from 'react-native-paper'
import styled from 'styled-components/native'
import { ThemeContext  } from 'styled-components'

 const  Button:React.FC<{children:ReactNode}>   = ({children,...rest}) => {
    //const {theme} =useContext(ThemeContext)

    return (
        <CustomButton  {...rest} >
            {children}
        </CustomButton  >
    )
}

export default Button

const CustomButton = styled(PaperButton)`
    background-color: ${props=>props.theme.colors.primary};
    color:white;
`