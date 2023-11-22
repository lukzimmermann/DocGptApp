import styles from './App.module.css';
import ChatPage from './pages/chatPage/chatPage.component';

function App() {
  return (
    <div className={styles.mainContainer}>
      <ChatPage />
    </div>
  );
}

export default App;
