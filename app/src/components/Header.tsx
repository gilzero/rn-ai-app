import {
  StyleSheet, View, TouchableHighlight
} from 'react-native'
import { useContext } from 'react'
import { Icon } from './Icon'
import { ThemeContext, AppContext } from '../../src/context'
import Ionicons from '@expo/vector-icons/Ionicons'

export function Header() {
  const { theme } = useContext(ThemeContext)
  const {
    handlePresentModalPress,
    clearChat
  } = useContext(AppContext)
  const styles = getStyles(theme)

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.leftButtonContainer}
        underlayColor={'transparent'}
        activeOpacity={0.6}
        onPress={handlePresentModalPress}
      >
        <Ionicons
          name="ellipsis-horizontal"
          size={24}
          color={theme.textColor}
        />
      </TouchableHighlight>

      <Icon size={34} fill={theme.textColor} />

      <TouchableHighlight
        style={styles.rightButtonContainer}
        underlayColor={'transparent'}
        activeOpacity={0.6}
        onPress={clearChat}
      >
        <Ionicons
          name="add-circle-outline"
          size={24}
          color={theme.textColor}
        />
      </TouchableHighlight>
    </View>
  )
}

function getStyles(theme:any) {
  return StyleSheet.create({
    leftButtonContainer: {
      position: 'absolute',
      left: 15,
      padding: 15
    },
    rightButtonContainer: {
      position: 'absolute',
      right: 15,
      padding: 15
    },
    container: {
      paddingVertical: 15,
      backgroundColor: theme.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor
    }
  })
}