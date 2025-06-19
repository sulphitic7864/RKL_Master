import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7fbf2',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  switch: {
    marginHorizontal: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  errorContainer: {
    padding: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  toggleContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#1e4d2b',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#c5f7c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#1e4d2b',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  activeButtonText: {
    color: '#fff',
  },
});
