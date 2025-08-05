import React, {useEffect, useRef} from "react";
import {Animated, StyleSheet, View, Image, Pressable} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ThemedText} from "@/components/ThemedText";

const Hero: React.FC = () => {
    const scale = useRef(new Animated.Value(0.95)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const avatarX = useRef(new Animated.Value(-50)).current;
    const infoY = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        // 启动动画
        Animated.timing(scale, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        Animated.spring(avatarX, {
            toValue: 0,
            useNativeDriver: true,
        }).start();

        Animated.spring(infoY, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <GestureHandlerRootView style={styles.heroWrapper}>
            <Animated.View style={[styles.heroCard, {opacity, transform: [{scale}]}]}>
                <Animated.View style={[styles.avatarBox, {transform: [{translateX: avatarX}]}]}>
                    <Image source={require("@/assets/images/avatar.jpg")} style={styles.avatar}/>
                </Animated.View>
                <Animated.View style={[styles.infoBox, {transform: [{translateY: infoY}]}]}>
                    <ThemedText style={styles.title}>ABOUT ME</ThemedText>
                    <ThemedText style={styles.name}>Jiang Fan</ThemedText>
                    <ThemedText style={styles.subTitle}>一名前端开发者</ThemedText>
                    <View style={styles.profile}>
                        <ThemedText>
                            <ThemedText style={styles.bold}>🎓 学历：</ThemedText> 本科 - 武汉东湖学院
                        </ThemedText>
                        <ThemedText>
                            <ThemedText style={styles.bold}>🧑‍💻 专业：</ThemedText> 软件工程
                        </ThemedText>
                        <Pressable onPress={() => {/* 拨打电话或其他操作 */
                        }}>
                            <ThemedText>
                                <ThemedText style={styles.bold}>📞 电话：</ThemedText> +86{" "}
                                <ThemedText style={styles.link}>13647228144</ThemedText>
                            </ThemedText>
                        </Pressable>
                        <Pressable onPress={() => {/* 发邮件操作 */
                        }}>
                            <ThemedText>
                                <ThemedText style={styles.bold}>📬 邮箱：</ThemedText>{" "}
                                <ThemedText style={styles.link}>jf1431037397@gmail.com</ThemedText>
                            </ThemedText>
                        </Pressable>
                        <ThemedText>
                            <ThemedText style={styles.bold}>📍 地址：</ThemedText> 湖北武汉
                        </ThemedText>
                    </View>
                </Animated.View>
            </Animated.View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    heroWrapper: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    heroCard: {
        width: "100%",
        maxWidth: 970,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 20,
        paddingVertical: 20,
        flexDirection: "column",  // 修改这里，改为垂直布局
        justifyContent: "center",
        alignItems: "center",  // 居中对齐
        marginBottom: 40,
    },
    avatarBox: {
        width: 120,
        height: 120,
        borderRadius: 80,
        overflow: "hidden",
        marginBottom: 20,  // 给头像和内容之间添加间距
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 80,
    },
    infoBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",  // 居中对齐
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
    },
    name: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        color: "#888",
        marginBottom: 20,
    },
    profile: {
        marginBottom: 20,
    },
    bold: {
        fontWeight: "bold",
    },
    link: {
        color: "#007aff",
        textDecorationLine: "underline",
    },
});

export default Hero;
