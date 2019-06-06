import colors from './colors';

styles = {
    pageHeader: {
        background: colors.background,
    },
    pageContainer: {
        backgroundColor: colors.background,
        paddingTop: 40,
        margin: 0,
        flex: 1,
    },
    cardTitle: {
        color: 'white',
    },
    cardContainer: {
        borderRadius: 0,
        padding: 4,
        backgroundColor: colors.secondaryBackground,
    },
    card: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.background
    },
    pageTitle: {
        paddingTop: 5,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 60,
        backgroundColor:'white',
        color: 'black',
        fontFamily: 'Avenir-Medium',
    },
    pageSubTitle: {
        paddingTop: 10,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 20,
        backgroundColor:'white',
        color: 'black',
        fontFamily: 'Avenir-Light',
    },
    chart_title : {
        paddingTop: 5,
        textAlign: 'left',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 18,
        backgroundColor:'white',
        color: "black",
        fontFamily: 'Avenir-Medium',
      }
}

export default styles;