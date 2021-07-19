import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Persona'> { };

export const Persona = ({ navigation, route }: Props) => {

  const { id, name } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, [])

  return (
    <View style={styles.gobalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(route.params, null, 2)
        }
      </Text>
    </View>
  )
}
