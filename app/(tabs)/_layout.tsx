// app/_layout.tsx
import {Tabs} from 'expo-router';
import {Feather} from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs screenOptions={
            {
                tabBarActiveTintColor: '#0a7ea4',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '700',
                },
            }
        }>
            <Tabs.Screen
                name="index"
                options={{
                    title: '关于我',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="home" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="article"
                options={{
                    title: '技术文章',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="file-text" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="scenes"
                options={{
                    title: '开发场景',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="activity" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="algorithm"
                options={{
                    title: '算法专区',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="cpu" size={size} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}