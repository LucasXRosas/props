import React from 'react';
import { ScrollView, StyleSheet, Text, Alert } from 'react-native';
// Use react-native-safe-area-context instead of react-native's SafeAreaView
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { UserProfileCard } from './components/UserProfileCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.headerTitle}>Perfis de Usuários</Text>

          {/* Usuário 1: Todas as propriedades fornecidas */}
          <UserProfileCard
            name="Ana Silva"
            role="Product Designer"
            avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            bio="Apaixonada por criar experiências visuais incríveis e acessíveis para mobile."
            status="online"
            onPressFollow={() => Alert.alert('Ação', 'Você começou a seguir Ana Silva!')}
          />

          {/* Usuário 2: Apenas propriedades obrigatórias e status offline */}
          <UserProfileCard
            name="Carlos Eduardo"
            role="Desenvolvedor Mobile"
            avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
            status="offline"
          />

          {/* Usuário 3: Com biografia personalizada, mas sem status */}
          <UserProfileCard
            name="Beatriz Lima"
            role="Tech Lead"
            avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
            bio="Liderando times técnicos rumo a soluções escaláveis em React Native."
            onPressFollow={() => Alert.alert('Ação', 'Você começou a seguir Beatriz Lima!')}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  scrollContent: {
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333333',
  },
});