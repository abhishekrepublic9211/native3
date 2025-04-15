import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: '#f0f0f0',
    // borderRadius: 10,
    flex: 1,
    marginVertical: 10,
  },

  scrollArea: {
    padding: 16,
    paddingBottom: 40, // extra bottom spacing for scroll
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  formContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    // width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginVertical: 5,
  },

  h2: {
    fontSize: 22, // H2 ka size
    fontWeight: 'bold', // Bold text
    color: '#333',
  },

  cardContainer: {
    flexDirection: 'column', // Aligns items vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  cardWrapper: {
    flexDirection: 'column', // Aligns items vertically
    gap: 10,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    width: '90%',
  },

  image: {
    width: '100%',
    // height: "100%",
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },

  clickHerebtn: {
    borderRadius: 25,
    backgroundColor: '#00AEEF',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default styles;
