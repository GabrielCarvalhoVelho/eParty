import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginCadastro from './pages/LoginCadastro';
import Dashboard from './pages/Dashboard';
import DetalhesFesta from './pages/DetalhesFesta';
import Planejamento from './pages/Planejamento';
import Carrinho from './pages/Carrinho';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginCadastro">
        <Stack.Screen
          name="LoginCadastro"
          options={{ headerShown: false }}
          component={LoginCadastro}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          name="DetalhesFesta"
          component={DetalhesFesta}
        />
        <Stack.Screen
          name="Planejamento"
          component={Planejamento}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
