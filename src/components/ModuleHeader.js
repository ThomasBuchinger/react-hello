import Badge from 'react-bootstrap/esm/Badge'
import './CpuModule.css'
import LedStatus from './LedStatus'


const ModuleHeader = (props) => {
    return (

        <div className='cpu-module-header'>
            <label style={{align: 'left'}}>{props.name}</label>
        </div>
    )
}


const ModuleFlags = (props) => {
    return (
        <div className='cpu-module-flags'>
            {props.children}
        </div>
    )
}

const ModuleContent = (props) => {
    return (
        <div className='cpu-module-content'>
            {props.children}
        </div>
    )
}

const LedBar = ({data}) => {
    const bitSet = 'badge led-bar badge-danger'
    const bitClear = 'badge led-bar badge-secondary'
    return (
        <div>
            { data.map((bit, index)=>{
                return <span className={data[index] ? bitSet : bitClear}>{index}</span>
            })}
        </div>
    )
}

const CpuModuleBase = {ModuleHeader, ModuleFlags, ModuleContent, LedBar}
export default CpuModuleBase
