import { useEffect } from 'react';
import App from '../components/App';

export default function Home() {
  useEffect(
    ()=> {
console.error('test')
    }, []
  )
  return <App />;
}
