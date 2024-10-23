// app/tabs/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      {/* Pantalla inicial: Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      {/* Pantalla de Hombres */}
      <Tabs.Screen
        name="Hombres"
        options={{
          title: 'Hombres',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'man' : 'man-outline'} color={color} />
          ),
        }}
      />

      {/* Pantalla de Mujeres */}
      <Tabs.Screen
        name="Mujeres"
        options={{
          title: 'Mujeres',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'woman' : 'woman-outline'} color={color} />
          ),
        }}
      />

      {/* Pantalla de Quiénes Somos */}
      <Tabs.Screen
        name="QuienesSomos"
        options={{
          title: 'Quiénes Somos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
      />

      {/* Pantalla de Login */}
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
