import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
// import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../themes/appTheme'

// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1 = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={{ marginLeft: 10, fontSize: 18, color: 'black' }}>Menu</Text>
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.gobalMargin}>
      <Text style={styles.title}>pagina 1</Text>
      <Button
        title='Ir pagina 2'
        onPress={() => { navigation.navigate('Pagina2') }}
      />
      <Text style={{ marginVertical: 20, fontSize: 20 }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Persona', {
            id: 1,
            name: 'Maicol Rodriguez'
          })}
          style={{ ...styles.button, backgroundColor: '#5856d6' }}
        >
          <Text style={styles.buttonText}>Maicol</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Persona', {
            id: 1,
            name: 'Roberto Rodriguez'
          })}
          style={{ ...styles.button, backgroundColor: '#ff9427' }}
        >
          <Text style={styles.buttonText}>Roberto</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}
