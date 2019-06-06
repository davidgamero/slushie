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
        padding: 8,
        backgroundColor: colors.secondaryBackground,
    },
    card: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.background
    },
    chart_title : {
        paddingTop: 15,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 18,
        backgroundColor:'white',
        color: colors.accent,
        fontWeight:'bold',
      }
}

export default styles;