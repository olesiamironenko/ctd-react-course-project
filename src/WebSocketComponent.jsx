//useEffect with dependency array and cleanup function
import { useEffect } from 'react';

function WebSocketComponent() {
  useEffect(() => {
    const socket = new WebSocket('wss://echo.websocket.events'); // a public echo server — it sends back whatever is sent to it

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      console.log('Cleanup - Closing WebSocket connection');
      socket.close();
    };
  }, []);

  return <div>WebSocket Component</div>;
}

export default WebSocketComponent;
