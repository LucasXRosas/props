import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export interface UserProfileCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  bio?: string;
  status?: 'online' | 'offline';
  onPressFollow?: () => void;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  role,
  avatarUrl,
  bio,
  status,
  onPressFollow,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handlePress = () => {
    setIsFollowing((prev) => !prev);

    if (onPressFollow) {
      onPressFollow();
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        {status && (
          <View
            style={[
              styles.statusIndicator,
              status === 'online' ? styles.statusOnline : styles.statusOffline,
            ]}
          />
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.bio}>
          {bio ? bio : 'Este usuário não possui biografia.'}
        </Text>
      </View>

      {onPressFollow && (
        <TouchableOpacity 
          style={[
            styles.followButton, 
            isFollowing && styles.followingButton
          ]} 
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <Text style={[
            styles.followButtonText,
            isFollowing && styles.followingButtonText 
          ]}>
            {isFollowing ? 'Seguindo' : 'Seguir'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 4,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E1E1E1',
  },
  statusIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  statusOnline: {
    backgroundColor: '#4CAF50',
  },
  statusOffline: {
    backgroundColor: '#9E9E9E',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  role: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
    marginBottom: 8,
  },
  bio: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 18,
  },
  // Estilo padrão (Seguir - Azul)
  followButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  // Estilo ativo (Seguindo - Cinza)
  followingButton: {
    backgroundColor: '#E5E5EA',
  },
  followingButtonText: {
    color: '#000000',
  },
});