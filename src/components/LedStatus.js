import Badge from 'react-bootstrap/Badge'
import './CpuModule.css'

const LedStatus = ({label, active}) => {
    return (
        <Badge variant={ active ? 'success' : 'secondary' }>{label}</Badge>
    )
}

export default LedStatus
