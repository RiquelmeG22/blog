// src/routes/Loading.jsx
import { ThreeDot } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
      <ThreeDot color={["#32cd32", "#327fcd"]} size="medium" text="" textColor="#32cd32" />
    </div>
  )
}

export default Loading



