import React, {useState} from 'react';
import {Animated, Linking, StyleSheet, RefreshControl} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import Nutshell from "@/app/components/index/Nutshell";
import ScrollView = Animated.ScrollView;
import Hero from "@/app/components/index/Hero";

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);

    const openLink = (url: string) => Linking.openURL(url);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
        >
            <ThemedView>
                <Nutshell/>
            </ThemedView>

            {/* 个人信息区 */}
            <ThemedView style={styles.section}>
                <Hero/>
            </ThemedView>

            {/* 关键信息卡片 */}
            <ThemedView style={styles.card}>
                <ThemedText type="defaultSemiBold" style={styles.cardTitle}>📌 关键信息</ThemedText>
                <ThemedView style={styles.infoItem}>
                    <ThemedText type="defaultSemiBold">📍</ThemedText>
                    <ThemedText style={styles.infoText}>上海 · 中国</ThemedText>
                </ThemedView>
                <ThemedView style={styles.infoItem}>
                    <ThemedText type="defaultSemiBold">✉️</ThemedText>
                    <ThemedText
                        style={[styles.infoText, styles.link]}
                        onPress={() => openLink('mailto:your@email.com')}>
                        your@email.com
                    </ThemedText>
                </ThemedView>
                <ThemedView style={styles.infoItem}>
                    <ThemedText type="defaultSemiBold">🔗</ThemedText>
                    <ThemedText
                        style={[styles.infoText, styles.link]}
                        onPress={() => openLink('https://github.com/yourprofile')}>
                        github.com/yourprofile
                    </ThemedText>
                </ThemedView>
            </ThemedView>

            {/* 最新文章 */}
            <ThemedView style={styles.section}>
                <ThemedText type="title" style={styles.sectionTitle}>最新文章</ThemedText>
                {[{title: 'Expo Router深度实践', date: '2023-11-15'},
                    {title: 'React Native性能优化指南', date: '2023-10-28'},
                    {title: 'Node.js微服务架构设计', date: '2023-09-12'}].map((post, index) => (
                    <ThemedView key={index} style={styles.postItem}>
                        <ThemedText type="defaultSemiBold">{post.title}</ThemedText>
                        <ThemedText style={styles.postDate}>{post.date}</ThemedText>
                    </ThemedView>
                ))}
            </ThemedView>
        </ScrollView>
    );
}

// 高级简约样式
const styles = StyleSheet.create({
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 3,
    },
    name: {
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        opacity: 0.8,
        textAlign: 'center',
        marginTop: 8,
    },
    bio: {
        textAlign: 'center',
        marginTop: 16,
        lineHeight: 22,
        paddingHorizontal: 24,
    },
    section: {
        marginVertical: 24,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        paddingBottom: 8,
    },
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 12,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
    },
    infoText: {
        marginLeft: 10,
        flex: 1,
    },
    link: {
        textDecorationLine: 'underline',
    },
    postItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    postDate: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
});
