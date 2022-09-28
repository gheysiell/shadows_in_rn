import { Shadow } from 'react-native-shadow-2'
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>REACT-NATIVE SHADOWS</Text>
            </View>
            <View style={styles.wrapperBody}>
                {/*With library*/}
                <View style={styles.wrapperContentShadows}>
                    <Text style={styles.wrapperContentShadowsText}>Using react-native-shadow-2 lib</Text>
                    <Shadow distance={5} startColor={'#90e778'} endColor={"#000"}>
                        <View style={styles.view1}/>
                    </Shadow>
                </View>

                {/*With react-native onyl*/}
                <View style={styles.wrapperContentShadows}>
                    <Text style={styles.wrapperContentShadowsText}>Using react-native pure</Text>
                    <View style={styles.view2}/>
                </View>                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: "#000"
    },
    wrapperTitle: {
        height: '20%',
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: '700',
        backgroundColor: '#000',
        textShadowOffset: {
            width: 2,
            height: 3
        },
        textShadowColor: "#ddd",
        textShadowRadius: 1,
    },
    wrapperBody: {
        padding: 10,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        borderRadius: 40,
        height: 80,
        width: 80,
        backgroundColor: "#34EC00",
        marginBottom: 40,
    },
    view2: {
        borderRadius: 40,
        height: 80,
        width: 80,
        backgroundColor: "#34EC00",
        shadowColor: "#34EC00",
        elevation: 35
    },
    wrapperContentShadows: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperContentShadowsText: {
        fontSize: 19,
        color: "#fff",
        marginBottom: 20
    }
});