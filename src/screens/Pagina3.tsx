import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const Pagina3 = ({ navigation }: Props) => {
  return (
    <View style={styles.gobalMargin}>
      <Text style={styles.title}>pagina 3</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
      <Button
        title='Ir a pagina 1'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
