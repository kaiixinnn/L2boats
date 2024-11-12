// boat.js
import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollView: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    boatContainer: {
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '90%',
    },
    titleContainer: {
        flexDirection: 'row', // Arrange icon and title horizontally
        alignItems: 'center', // Align them vertically in the center
        marginBottom: 10,
    },
    icon: {
        marginRight: 8, // Space between icon and title
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginTop: 10,
    },
});

// Boat Component to Display Each Boat's Details
const Boats = ({ title, description, icon_name, poster }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.titleContainer}>
                <Icon name={icon_name} size={24} color="#B23B23" style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={styles.image} />
        </View>
    );
};

// Main Component Rendering All Boats
const AllBoats = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {/* Header at the Top */}
                <Text style={styles.header}>Get a boat - For sale</Text>

                {/* Boat Listings */}
                <Boats
                    icon_name="ship"
                    title="SEA RAY 500 SUNDANCER"
                    description="Contoured lines and dramatic styling reveal a refined and powerful presence."
                    poster={require('../img/sea_ray.jpg')}
                />
                <Boats
                    icon_name="ship"
                    title="FOUR WINNS HORIZON 180"
                    description="A sporty look and refined details truly  set the Horizon 180 above all others."
                    poster={require('../img/four_winns.jpg')}
                />
                <Boats
                    icon_name="ship"
                    title="Flipper 640 ST"
                    description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    poster={require('../img/flipper.jpg')}
                />
                <Boats
                    icon_name="ship"
                    title="Princess V48"
                    description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model."
                    poster={require('../img/princess.jpg')}
                />
                <Boats
                    icon_name="ship"
                    title="Bayliner 175 Bowrider"
                    description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    poster={require('../img/bayliner.jpg')}
                />
                <Boats
                    icon_name="ship"
                    title="Fairline Targa 47"
                    description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    poster={require('../img/fairline.jpg')}
                />
            </ScrollView>
        </SafeAreaView>
    );
};



// Export the AllBoats Component
export default AllBoats;
