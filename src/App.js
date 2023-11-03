import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginCadastro from './pages/LoginCadastro';
import Dashboard from './pages/Dashboard';
import DetalhesFesta from './pages/DetalhesFesta';
import Planejamento from './pages/Planejamento';
import Carrinho from './pages/Carrinho';
import FormaDePagamento from './pages/FormaDePagamento';
import FinalizarCompra from './pages/FinalizarCompra';
import AcompanheSeuPedido from './pages/AcompanheSeuPedido';
import CriarFesta from './pages/CriarFesta';
import MeusPedidos from './pages/MeusPedidos';
import MeusCartoes from './pages/MeusCartoes';
import AdicionarCartao from './pages/AdicionarCartao';
import MeuPerfil from './pages/MeuPerfil';
import Configuracoes from './pages/Configuracoes';
import GerenciarNotificacoes from './pages/GerenciarNotificacoes';
import SobreEstaVersao from './pages/SobreEstaVersao';
import Ajuda from './pages/Ajuda';

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
        <Stack.Screen
          name="FormaDePagamento"
          component={FormaDePagamento}
        />
        <Stack.Screen
          name="FinalizarCompra"
          component={FinalizarCompra}
        />
        <Stack.Screen
          name="AcompanheSeuPedido"
          component={AcompanheSeuPedido}
        />
        <Stack.Screen
          name="CriarFesta"
          component={CriarFesta}
        />
        <Stack.Screen
          name="MeusPedidos"
          component={MeusPedidos}
        />
        <Stack.Screen
          name="MeusCartoes"
          component={MeusCartoes}
        />
        <Stack.Screen
          name="AdicionarCartao"
          component={AdicionarCartao}
        />
        <Stack.Screen
          name="MeuPerfil"
          component={MeuPerfil}
        />
        <Stack.Screen
          name="Configuracoes"
          component={Configuracoes}
        />
        <Stack.Screen
          name="GerenciarNotificacoes"
          component={GerenciarNotificacoes}
        />
        <Stack.Screen
          name="SobreEstaVersao"
          component={SobreEstaVersao}
        />
        <Stack.Screen
          name="Ajuda"
          component={Ajuda}
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
