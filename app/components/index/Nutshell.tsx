import { Text, View, StyleSheet } from 'react-native';

const Nutshell = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'\u3000\u3000'}👋🏼 你好，<Text style={styles.boldText}>我是 Jiang Fan</Text>，一名前端开发者。这个博客是我用于
                <Text style={styles.boldText}>展示技能</Text>、<Text style={styles.boldText}>沉淀知识</Text>
                和 <Text style={styles.boldText}>记录成长</Text> 的空间。
            </Text>

            <Text style={styles.text}>
                {'\u3000\u3000'} 我热衷于构建有趣且实用的 Web 应用，专注于
                <Text style={styles.boldText}>前端开发</Text>、<Text style={styles.boldText}>动效设计</Text> 和
                <Text style={styles.boldText}>用户体验</Text>。希望这个网站能让你更了解我，也成为我们交流的桥梁。
            </Text>

            <Text style={styles.text}>
                {'\u3000\u3000'}  技术方向主要聚焦在 <Text style={styles.boldText}>React</Text> / <Text style={styles.boldText}>Vue</Text> /{' '}
                <Text style={styles.boldText}>Node.js</Text> 等现代前端框架与生态，
                同时也对 <Text style={styles.boldText}>界面设计</Text>、<Text style={styles.boldText}>动效实现</Text>、<Text
                style={styles.boldText}
            >
                前端工程化
            </Text>
                保持浓厚兴趣。欢迎交流与指正！
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        marginVertical: 20,
        padding: 16,
        textAlign: 'justify',  // 使文本两端对齐
        letterSpacing: 0.5, // 设置字间距（例如0.5px）
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#0071e3',
    },
});

export default Nutshell;
