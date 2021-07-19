import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

export const Pagina2 = () => {

  const navigator = useNavigation()

  useEffect(() => {
    navigator.setOptions({
      title: 'hola maicol',
      headerBackTitle: 'Back', //para cambiar el atras en ios
    })
  }, [])

  return (
    <View style={styles.gobalMargin}>
      <Text style={styles.title}>pagina 2</Text>
      <Button
        title='Ir pagina 3'
        onPress={() => navigator.navigate('Pagina3')}
      />
    </View>
  )
}
