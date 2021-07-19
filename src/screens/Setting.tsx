import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../themes/appTheme'

export const Setting = () => {

  const insets = useSafeAreaInsets() // se usa para sacar el margin necesario para que el contenido salga debajo del notch

  return (
    <View style={{ ...styles.gobalMargin, marginTop: insets.top + 20 }}>
      <Text style={styles.title}>Setting screens</Text>
    </View>
  )
}
