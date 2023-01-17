import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#09090a',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" color="#7c3aed" />
    </View>
  );
}
