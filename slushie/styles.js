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
        fontSize: 25,
        backgroundColor:'white',
        color: 'black',
        fontFamily: 'Avenir-Light',
    },
    pageAccentSubTitle: {
        paddingTop: 10,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 20,
        color:colors.accent,
        backgroundColor: 'white',
        fontFamily: 'Avenir-Light',
        textAlign: 'left',
    },
    suggestion: {
        fontFamily: 'Avenir-Light',
        fontSize: 20,
        lineHeight: 40,
        paddingLeft: 12,
    },
    suggestionAccent: {
        fontFamily: 'Avenir-Medium',
        color: colors.accent,
        fontSize: 50,
        paddingLeft: 12,
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
      },
      sidePageTitle: {
        paddingTop: 10,
        textAlign: 'left',
        paddingBottom: 5,
        paddingTop: 40,
        paddingLeft: 24,
        fontSize: 25,
        backgroundColor:'white',
        color: 'black',
        fontFamily: 'Avenir-Medium',
    },
      txRow : {
        width: '100%',
        height: 50,
        fontSize: 14,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontFamily: 'Avenir-Medium',
      }
}

export default styles;