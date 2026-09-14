import React from 'react';
import { ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { UserProfileCard } from './components/UserProfileCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.headerTitle}>Perfis de Usuários</Text>

          <UserProfileCard
            name="Analice Xavier"
            role="Product Designer"
            avatarUrl="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            bio="Apaixonada por criar experiências visuais incríveis e acessíveis para mobile."
            status="online"
            onPressFollow={() => Alert.alert('Ação', 'Você começou a seguir Analice Xavier!')}
          />

          <UserProfileCard
            name="Andres Jessé Porfirio"
            role="Desenvolvedor Mobile"
            avatarUrl="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            status="offline"
          />

          <UserProfileCard
            name="Lucas Rosa"
            role="Tech Lead"
            avatarUrl="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            bio="Liderando times técnicos rumo a soluções escaláveis em React Native."
            onPressFollow={() => Alert.alert('Ação', 'Você começou a seguir Lucas Rosa!')}
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